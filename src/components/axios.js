import axios from "axios"

const example = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

export default example
