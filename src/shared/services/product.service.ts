import { useQuery } from "@tanstack/react-query";
import { API } from "../api";

interface IParams {
  limit?: number;
  skip?: number;
  order?: string;
}

export const useProductKey: string = "ProductKey";

export const useProduct = () => {
  const getProduct = (params?: IParams) =>
    useQuery({
      queryKey: [useProductKey, params],
      queryFn: () => API.get("product", { params }).then((res) => res.data),
      gcTime: 1000 * 60 * 30,
      staleTime: 1000 * 60 * 15,
    });
  const getProductByID = (id: string) =>
    useQuery({
      queryKey: [useProductKey],
      queryFn: () => API.get(`product/${id}`).then((res) => res.data),
      select: (data) => data.data,
    });

  return { getProduct, getProductByID };
};
