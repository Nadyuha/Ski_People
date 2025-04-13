import { API_URL } from "./const";

export const getData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
}