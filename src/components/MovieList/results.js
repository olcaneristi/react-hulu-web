import React, { useState, useEffect } from "react"
import ItemCard from "../ItemCard/itemcard"
import axios from "../axios"
import FlipMove from "react-flip-move"

function Movielist({ Option }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Option)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [Option])

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <ItemCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  )
}

export default Movielist
