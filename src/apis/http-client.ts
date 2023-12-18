import axios from 'axios';
import type { AxiosInstance } from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL as string;

export const httpClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 5_000,
});
