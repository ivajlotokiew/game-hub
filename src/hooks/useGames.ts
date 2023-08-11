import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, endpoint: string) =>
  useData<Game>(endpoint, { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
    endpoint,
  ]);

export default useGames;
