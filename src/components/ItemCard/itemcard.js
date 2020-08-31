import React, { forwardRef, useState } from "react"
import Modal from "react-modal"
import { Star, Like, Date } from "../icons"

const base_url = "https://image.tmdb.org/t/p/original"

Modal.setAppElement("#root")

const ItemCard = forwardRef(({ movie }, ref) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="itemcard">
      <div ref={ref} className="itemcard-container">
        <button onClick={() => setModalIsOpen(true)}>
          <img
            alt="view"
            loading="lazy"
            src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
          />
        </button>

        <Modal
          isOpen={modalIsOpen}
          portalClassName="modal"
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h3>{movie.name || movie.original_title || movie.title}</h3>
          <div className="viewer-count">
            <p>
              <Date />
              &nbsp;<span>{movie.release_date || movie.first_air_date}</span>
            </p>
            <p>
              <Star />
              &nbsp;<span>{movie.vote_average}</span>
            </p>
            <p>
              <Like />
              &nbsp;<span>{movie.vote_count}</span>
            </p>
          </div>{" "}
          <p>
            <span>{movie.overview}</span>
          </p>
        </Modal>
      </div>
    </div>
  )
})

export default ItemCard
