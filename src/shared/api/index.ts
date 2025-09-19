import axios from "axios";

export const BASE_URL: string = "https://api.errorchi.uz/product";

export const API = axios.create({ baseURL: "https://api.errorchi.uz/" });
