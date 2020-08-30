import React, { forwardRef } from "react"

const base_url = "https://image.tmdb.org/t/p/original"

const ItemCard = forwardRef(({ movie }, ref) => {
  return (
    <div className="itemcard">
      <div ref={ref} className="itemcard-container">
        <img alt="view" src={`${base_url}${movie.backdrop_path}`} />
        <h3>{movie.title}</h3>

        <p>
          <span>{movie.overview}</span>
        </p>
        <p>
          Release Date: <span>{movie.release_date}</span>
        </p>
        <p>
          Rating: <span>{movie.vote_average}</span>
        </p>
      </div>
    </div>
  )
})

export default ItemCard
