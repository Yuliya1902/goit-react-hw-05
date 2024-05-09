import axios from "axios";

const API_TOKEN =
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBlY2U4M2M5ZTM1ZjA3YTM2ZGU4NTc2ODNmYzYxMCIsInN1YiI6IjY2MzAxODM3YzhmM2M0MDEyNDlmZjU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mwE9gdsjRcuFiVsCxrNy4Bbcgt1WV97-PD12Cffp0fo"  

const BASE_URL = "https://api.themoviedb.org/";

const options = {
  headers: {
    Authorization: "Bearer " + API_TOKEN,
  },
};

export const fetchMoviesTrending = async () => {
  const url = BASE_URL + "3/trending/movie/day";
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesSearch = async (query) => {
  const url = BASE_URL + `3/search/movie?query=${query}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesDetails = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesCredits = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}/credits`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesReviews = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}/reviews`;
  const response = await axios.get(url, options);
  return response;
};