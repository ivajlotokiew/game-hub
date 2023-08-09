import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => setData(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return { data, error, isLoading };
};

export default useData;
