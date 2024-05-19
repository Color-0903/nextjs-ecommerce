import {axiosInstance} from "@/apis";
import { redirect } from 'next/navigation'

export const getToken = () => {
    if (typeof window !== "undefined") return localStorage.getItem("token");
};

export const setToken = (token: string) => {
    axiosInstance.defaults.headers.Authorization = token
        ? `Bearer ${token}`
        : "";
    localStorage.setItem("token", token);
};
