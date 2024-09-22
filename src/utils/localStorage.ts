import {axiosInstance} from "@/apis";
import { redirect } from 'next/navigation'

export const getToken = () => {
    if (typeof window !== "undefined") return localStorage.getItem("token");
};
