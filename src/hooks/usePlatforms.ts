import useData from "./useData";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = (endpoint: string) => useData<Platforms>(endpoint);

export default usePlatforms;
