import React, { forwardRef, useState } from "react"
import Modal from "react-modal"

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
            src={`${base_url}${movie.backdrop_path}`}
          />
        </button>

        <Modal
          isOpen={modalIsOpen}
          portalClassName="modal"
          onRequestClose={() => setModalIsOpen(false)}
        >
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
          <p>
            Likes: <span>{movie.vote_count}&nbsp;people like this. </span>
          </p>
        </Modal>
      </div>
    </div>
  )
})

export default ItemCard
