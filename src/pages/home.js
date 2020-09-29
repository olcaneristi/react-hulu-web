import React, { useState } from "react"
import Navbar from "../components/Navbar/navbar"
import MovieList from "../components/MovieList/results"
import requests from "../components/requests"

function Home() {
  const [Option, setOption] = useState(requests.fetchTrending)

  return (
    <section className="home__page">
      <Navbar setOption={setOption} />
      <MovieList Option={Option} />
    </section>
  )
}

export default Home
