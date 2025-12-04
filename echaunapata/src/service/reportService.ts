import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const createReport = async (data: FormData) => {
  try {
    const res = await axios.post(`${BASE_URL}/reports/create`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (err: any) {
    console.log(err);
    throw err.response;
  }
};
