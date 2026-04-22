import { useEffect, useState } from "react";
import { fetchFormats, fetchLanguages, fetchNetworks } from "../api/api";
import { getCached, setCached } from "../api/cache";
import { WidgetData } from "../interfaces/api-response";

const CACHE_KEY = "lareferencia_widget_data";

interface UseWidgetDataReturn {
  data: WidgetData | null;
  loading: boolean;
  error: Error | null;
}

export function useWidgetData(): UseWidgetDataReturn {
  const [data, setData] = useState<WidgetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const cached = getCached<WidgetData>(CACHE_KEY);
      if (cached) {
        setData(cached);
        setLoading(false);
        return;
      }

      try {
        const [formats, networks, { items: languages, resultCount }] =
          await Promise.all([fetchFormats(), fetchNetworks(), fetchLanguages()]);

        if (!cancelled) {
          const widgetData: WidgetData = { formats, networks, languages, resultCount };
          setCached(CACHE_KEY, widgetData);
          setData(widgetData);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error("Error fetching widget data"));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
