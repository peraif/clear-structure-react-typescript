import {getCookie} from "@/core/utils/getCookie";
import axios, {AxiosInstance} from "axios";

export default class Api {
    private client: AxiosInstance | null;
    private api_token?: string | null;
    private api_url?: string;

    constructor() {
        this.api_token = null;
        this.client = null;
        this.api_url = process.env.REACT_APP_API_ENDPOINT;
    }

    init = () => {
        this.api_token = getCookie("ACCESS_TOKEN");
        this.client = axios.create({
            withCredentials: true,
            baseURL: '',
        })
        this.client.interceptors.response.use(res => res.data)
        this.client.interceptors.request.use(config => {
            return {
                ...config,
                headers: this.api_token ? {
                    ...config.headers,
                    Authorization: `Bearer ${this.api_token}`
                } : config.headers
            }
        })
        return this.client;
    };
}

export const api = new Api();