import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres")
      .then((res) => setGenre(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return { genre, error, isLoading };
};

export default useGenre;
