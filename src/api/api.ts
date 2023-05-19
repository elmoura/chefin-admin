import axios, { AxiosResponse } from "axios";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

const http = axios.create({
  baseURL: "http://localhost:3000",
});

export async function graphQl<VarsType = any, ResultType = any>(
  query: string,
  variables?: VarsType
): Promise<AxiosResponse<ResultType>> {
  return http.post<ResultType>("/graphql", { query, variables }, {});
}
