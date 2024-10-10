import axios from "axios";
import { ApiResponse } from "../types/api";


const api = "https://www.lareferencia.info/vufind/api/v1/search?type=AllFields&page=0&limit=0&facet[]=format"

export const getApi = async (): Promise<ApiResponse> => {
    try {
      const response = await axios.get<ApiResponse>(api);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching API data");
    }

};
