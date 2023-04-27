import axios from 'axios';

interface AxiosCallProps {
  baseUrl: string;
  path: string;
  body?: any;
  headers?: any;
}

export async function get<Type>(props: AxiosCallProps): Promise<Type> {
  const { baseUrl, path, headers } = props;
  const apiClient = generateApiClient(baseUrl, headers);

  const result = await apiClient.get(`/${path}`);
  return result.data as Type;
}

export async function post<Type>(props: AxiosCallProps): Promise<Type> {
  const { baseUrl, body, path, headers } = props;
  const apiClient = generateApiClient(baseUrl, headers);

  const result = await apiClient.post(`/${path}`, body);
  return result.data as Type;
}

export async function put<Type>(props: AxiosCallProps): Promise<Type> {
  const { baseUrl, body, path, headers } = props;
  const apiClient = generateApiClient(baseUrl, headers);

  const result = await apiClient.put(`/${path}`, body);
  return result.data as Type;
}

function generateApiClient(baseUrl: string, headers: any) {
  return axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}
