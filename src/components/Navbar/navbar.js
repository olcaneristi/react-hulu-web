import React from "react"
import requests from "../requests"

function Navbar({ setOption }) {
  return (
    <section className="navbar">
      <div className="nav-container">
        <h2 onClick={() => setOption(requests.fetchTrending)}>Trending</h2>
        <h2 onClick={() => setOption(requests.fetchTopRated)}>Top Rated</h2>
        <h2 onClick={() => setOption(requests.fetchTheBest)}>All-Time Best</h2>
        <h2 onClick={() => setOption(requests.fetchUpcoming)}>Upcoming</h2>
        <h2 onClick={() => setOption(requests.fetchAction)}>Action</h2>
        <h2 onClick={() => setOption(requests.fetchCrime)}>Crime</h2>
        <h2 onClick={() => setOption(requests.fetchComedy)}>Comedy</h2>
        <h2 onClick={() => setOption(requests.fetchHistory)}>History</h2>
        <h2 onClick={() => setOption(requests.fetchHorror)}>Horror</h2>
        <h2 onClick={() => setOption(requests.fetchMystery)}>Mystery</h2>
        <h2 onClick={() => setOption(requests.fetchRomance)}>Romance</h2>
        <h2 onClick={() => setOption(requests.fetchThriller)}>Thriller</h2>
      </div>
    </section>
  )
}

export default Navbar
