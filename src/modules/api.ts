import axios from "axios";

interface HttpHeaders {
  [header: string]: string;
}
interface HttpOptions {
  headers?: HttpHeaders;
  params?: object;
}

interface HTTPResponse {
  data?: any;
  status?: number;
}

//http get method
export const getHttp = async (
  url: string,
  options: HttpOptions
): Promise<HTTPResponse> => {
  try {
    const response = await axios.get(url, options);
    return { data: response.data, status: response.status };
  } catch (error) {
    return error;
  }
};
