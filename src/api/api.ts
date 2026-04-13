import axios from "axios";
import { ApiResponse, FacetItem } from "../interfaces/api-response";

const BASE = "https://www.lareferencia.info/vufind/api/v1/search?type=AllFields&lang=en&facet[]=";

const get = async (facet: string): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${BASE}${facet}&limit=10`);
  return response.data;
};

export const fetchFormats = async (): Promise<FacetItem[]> => {
  const data = await get("format");
  return data.facets.format ?? [];
};

export const fetchNetworks = async (): Promise<FacetItem[]> => {
  const data = await get("network_name_str");
  return data.facets.network_name_str ?? [];
};

export const fetchLanguages = async (): Promise<{ items: FacetItem[]; resultCount: number }> => {
  const data = await get("language");
  return {
    items: data.facets.language ?? [],
    resultCount: data.resultCount,
  };
};
