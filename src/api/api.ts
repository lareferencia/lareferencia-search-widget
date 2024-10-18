import axios from "axios";
import { ApiResponse } from "../interfaces/api";


const api = "https://www.lareferencia.info/vufind/api/v1/search?type=AllFields&facet[]="

export const getApi = async (type: string): Promise<ApiResponse> => {
    try {
      const response = await axios.get<ApiResponse>(api + type + '&limit=10');
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching API data");
    }

};
