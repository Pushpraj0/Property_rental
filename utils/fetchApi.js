import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "5032d37c65mshb967e0d1e91cee8p11c960jsnc64817b60bc3",
    },
  });

  return data;
};
