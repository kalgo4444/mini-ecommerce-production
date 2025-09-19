import axios from "axios";

export const API_URL: string = "https://api.errorchi.uz";
export const BASE_URL: string = "https://api.errorchi.uz/product";

export const API = axios.create({ baseURL: "https://api.errorchi.uz/" });
