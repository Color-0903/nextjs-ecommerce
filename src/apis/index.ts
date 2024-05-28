import { logOut } from "@/utils/logout";
import axios from "axios";

import {
  AssetsApi,
  AuthUserApi,
  BannerApi,
  CadastralApi,
  CategoryApi,
  ColorApi,
  Configuration,
  OrderApi,
  OtpApi,
  ProductApi,
  SizeApi,
  UsersApi
} from "./client-axios";
import { getToken } from "@/utils/localStorage";
const config = new Configuration({
    basePath: process.env.NEXT_APP_API_URL,
    accessToken: getToken() || undefined,
});

export const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error?.response?.status === 401) {
            // logOut();
        }
        return Promise.reject(error);
    }
);

const categoryApi = new CategoryApi(config, undefined, axiosInstance);
const colorApi = new ColorApi(config, undefined, axiosInstance);
const sizeApi = new SizeApi(config, undefined, axiosInstance);
const productApi = new ProductApi(config, undefined, axiosInstance);
const assetsApi = new AssetsApi(config, undefined, axiosInstance);
const authUserApi = new AuthUserApi(config, undefined, axiosInstance);
const otpApi = new OtpApi(config, undefined, axiosInstance);
const bannerApi = new BannerApi(config, undefined, axiosInstance);
const orderApi = new OrderApi(config, undefined, axiosInstance);
const cadastralApi = new CadastralApi(config, undefined, axiosInstance);
const usersApi = new UsersApi(config, undefined, axiosInstance);

export { assetsApi, authUserApi, categoryApi, colorApi, productApi, sizeApi, otpApi, bannerApi, orderApi, cadastralApi, usersApi };

