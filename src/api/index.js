import axios from "axios";
const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

export const fetchData = async () => {
  const response = await axios.get(baseUrl).catch((error) => console.log(error));
  return response.data.results;
};
