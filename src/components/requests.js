const API_KEY = "ccb0a8566b23ab43471cda53fed3d9e7"

export default [
  {
    category: `/trending/all/day?api_key=${API_KEY}&language=tr-TR`,
    title: "Trending"
  },
  {
    category: `/movie/top_rated?api_key=${API_KEY}&language=tr-TR`,
    title: "Top Rated"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=tr-TR&sort_by=vote_count.desc`,
    title: "All-Time Best"
  },
  {
    category: `/movie/upcoming?api_key=${API_KEY}&language=tr-TR`,
    title: "Upcoming"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=tr-TR&sort_by=popularity.desc&with_genres=28`,
    title: "Action"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=tr-TR&sort_by=popularity.desc&with_genres=80`,
    title: "Crime"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=tr-TR&sort_by=popularity.desc&with_genres=35`,
    title: "Comedy"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=tr-TR&sort_by=popularity.desc&with_genres=36`,
    title: "History"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=tr-TR&sort_by=popularity.desc&with_genres=27`,
    title: "Horror"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=tr-TR&sort_by=popularity.desc&with_genres=9648`,
    title: "Mystery"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=tr-TR&sort_by=popularity.desc&with_genres=10749`,
    title: "Romance"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=tr-TR&sort_by=popularity.desc&with_genres=53`,
    title: "Thriller"
  }
]
