import axios from "axios";
import { ApiResponse } from "../interfaces/api";


const api = "https://www.lareferencia.info/vufind/api/v1/search?type=AllFields&facet[]="

export const getApi = async (type: string ): Promise<ApiResponse> => {
  
  
    try {
      if (type === '') {
        const response = await axios.get<ApiResponse>(api + 'format' + '&limit=10');
        return response.data;
      }
      const response = await axios.get<ApiResponse>(api + type + '&limit=10');

      console.log(response.data);
      
      switch (type) {
        case 'format':
          return response.data.facets.format;
        case 'network_name_str':
          return response.data.facets.network_name_str;
        case 'language':
          return response.data.facets.language;
        default:
          return response.data
      }
      
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching API data");
    }

};
