import axios from "axios";


const api = "https://www.lareferencia.info/vufind/api/v1/search?type=AllFields&page=0&limit=0&facet[]=format"

export const getApi = async () => {
    try {
        const response = await axios.get(api);
        //wait 2 seconds to simulate a real API call
        //this is helpful to check the skeleton loading
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return response.data;

    } catch (error) {
        console.log(error);

    }

};
