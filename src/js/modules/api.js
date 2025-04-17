import { API_URL } from "./const";
import { paginationData } from "../components/paginationData";

export const getData = async (query) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (query != "" && query != null) {
      const querySearch = data.filter(
        (item) => item.type === query || item.name === query
      );
      return paginationData(querySearch);
    }

    return paginationData(data, 12);
  } catch (error) {
    console.log("error: ", error);
  }
};
