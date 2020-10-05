import React, { useState } from "react"
import Navbar from "../components/Navbar/navbar"
import MovieList from "../components/MovieList/results"
import fetch from "../components/Navbar/fetch"

function Home() {
  const [Option, setOption] = useState(fetch.fetchTrending)

  return (
    <section className="home__page">
      <Navbar setOption={setOption} />
      <MovieList Option={Option} />
    </section>
  )
}

export default Home
