import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const GetAllAnimals = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/animal/find-all`, {
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

export const GetAllAnimalsAvailable = async()=>{
        try {
        const res = await axios.get(`${BASE_URL}/animal/find-all?state=AVAILABLE`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return res.data;
    } catch (error: any) {
        console.log(error);
        throw error.response;
    }
}


export const GetAnimalById = async (id:string) => {
    try {
        const res = await axios.get(`${BASE_URL}/animal/find-by-id/${id}`, {
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