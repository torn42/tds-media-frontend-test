import axios, { type AxiosInstance } from 'axios';
import type { ApiClient, QueryParams } from '../types/api';

export class AxiosApiClient implements ApiClient {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({ baseURL: baseUrl });
  }

  async get<T>(url: string, params?: QueryParams): Promise<T> {
    const res = await this.axiosInstance.get<T>(url, { params });
    return res.data;
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, body);
    return response.data;
  }

  async put<T>(url: string, body: unknown): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, body);
    return response.data;
  }

  async patch<T>(url: string, body: unknown): Promise<T> {
    const response = await this.axiosInstance.patch<T>(url, body);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url);
    return response.data;
  }
}
