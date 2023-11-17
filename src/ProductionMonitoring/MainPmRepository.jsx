import axios from "axios";

/**
 * Untuk ngefetch data yang dibutuhkan di screen Main PM
 */
export default class MainPmRepository {

    /**
     *  Ngefetch semua yang dibutuhin di form, dan juga dropdown arduino
     * */ 
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