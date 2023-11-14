import axios from "axios";

export default class MainPmRepository {
    async getProductionMonitoringData(username){
        try {
            const response = await axios.get(`http://localhost:4000/api/get-data/${username}`);
            if (response.status == 200){
                return response.data;
            }
        } catch (err) {
            console.log("Ada error : " , err)
        }
        return null;
    }
}