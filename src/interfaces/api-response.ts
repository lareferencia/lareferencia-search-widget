
export type Format = {
    value: string;
    translated: string;
    count: number;
    href: string;
}

type Facet = {
    format: Format[];
};

export type ApiResponse = {
    facets: Facet;
    resultCount: number;
    status: string;
};