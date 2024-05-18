import axios from "axios";

const API_KEY =
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBlY2U4M2M5ZTM1ZjA3YTM2ZGU4NTc2ODNmYzYxMCIsInN1YiI6IjY2MzAxODM3YzhmM2M0MDEyNDlmZjU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mwE9gdsjRcuFiVsCxrNy4Bbcgt1WV97-PD12Cffp0fo"  

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    query: query
                },
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};


export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null; 
    }
};

export const fetchMovieCast = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.cast;
    } catch (error) {
        console.error('Error fetching movie credits:', error);
        return [];
    }
};




export const fetchMovieReviews = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3//movie/${movieId}/reviews`,
            {
        
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.results;
    } catch (error) {
          console.error('Error fetching movie reviews:', error);
        return [];
    }
};