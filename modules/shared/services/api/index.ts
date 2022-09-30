import axios from 'axios';
// controllers
import { bx24Controllers } from './controllers';

export type CustomHeaders = { [key: string]: string };
export type APIVariables = {
  token?: string | null;
  baseURL?: string;
  customHeaders?: CustomHeaders;
};

const isServer = typeof window === 'undefined';
const API_URL = isServer ? process.env.NEXT_LOCAL_API_URL : process.env.NEXT_PUBLIC_API_URL; // Server URL (must be absolute)

export const createAPI = ({ baseURL = API_URL, customHeaders = {}, token }: APIVariables = {}) => {
  /* ------------- API instance ------------- */

  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      ...customHeaders,
      ...(token && { Authorization: `Bearer ${token}` })
    },
    timeout: 10000
  });

  /* ------------- Controllers ------------- */

  const getRoot = () => api.get<{ result: string[] }>('/');

  return {
    getRoot,
    // BX24
    ...bx24Controllers(api)
  };
};

export type CreateApi = (config?: APIVariables) => ReturnType<typeof createAPI>;

export * from './helpers';
