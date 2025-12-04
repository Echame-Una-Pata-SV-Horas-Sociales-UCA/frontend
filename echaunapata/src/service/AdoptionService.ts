import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const CreateAdoption = async (data: any) => {
    try {
        const res = await axios.post(`${BASE_URL}/adoption/applications/create`, data, {
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