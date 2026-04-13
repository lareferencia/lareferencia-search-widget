
/** Base facet item — shared structure across all facet types */
export type FacetItem = {
  value: string;
  translated: string;
  count: number;
  href: string;
};

/** Keep backward compat alias */
export type Format = FacetItem;

type Facets = {
  format: FacetItem[];
  network_name_str: FacetItem[];
  language: FacetItem[];
};

export type ApiResponse = {
  facets: Facets;
  resultCount: number;
  status: string;
};

/** Aggregate type returned by useWidgetData */
export type WidgetData = {
  formats: FacetItem[];
  networks: FacetItem[];
  languages: FacetItem[];
  resultCount: number;
};
