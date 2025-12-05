import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const FindMetrics = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/dashboards/metrics`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    } catch (error: any) {
        console.log(error);
        throw error.response;
    }
};
