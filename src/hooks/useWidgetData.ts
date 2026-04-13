import { useEffect, useState } from "react";
import { fetchFormats, fetchLanguages, fetchNetworks } from "../api/api";
import { WidgetData } from "../interfaces/api-response";

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
      try {
        const [formats, networks, { items: languages, resultCount }] =
          await Promise.all([fetchFormats(), fetchNetworks(), fetchLanguages()]);

        if (!cancelled) {
          setData({ formats, networks, languages, resultCount });
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
