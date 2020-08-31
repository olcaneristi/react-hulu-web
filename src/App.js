import React, { useState } from "react"
import "./assets/index.scss"
import Header from "./components/Header/header"
import Navbar from "./components/Navbar/navbar"
import MovieResult from "./components/MovieList/results"
import requests from "./components/requests"
import Footer from "./components/Footer/footer"

function App() {
  const [Option, setOption] = useState(requests.fetchTrending)

  return (
    <div className="App">
      <Header />
      <Navbar setOption={setOption} />
      <MovieResult Option={Option} />
      <Footer />
    </div>
  )
}

export default App
