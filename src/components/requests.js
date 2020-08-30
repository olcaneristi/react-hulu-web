const API_KEY = "ccb0a8566b23ab43471cda53fed3d9e7"

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=80`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
  fetchHistory: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=36`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=9648`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=53`,
  fetchTVMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10770`
}
