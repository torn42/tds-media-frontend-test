type ApiMethodWithBody = <T>(url: string, body: unknown) => Promise<T>;
export type QueryParams = Record<string, string | number | boolean>;

export interface ApiClient {
  get<T>(url: string, params?: QueryParams): Promise<T>;
  delete<T>(url: string): Promise<T>;
  post: ApiMethodWithBody;
  put: ApiMethodWithBody;
  patch: ApiMethodWithBody;
}
