import React from "react"
import { Link } from "react-router-dom"
import {
  Trending,
  Home,
  Title,
  Verified,
  Collections,
  Search,
  Profile
} from "../icons"

function Header() {
  return (
    <section className="header">
      <div className="header-container">
        <nav className="header-nav">
          <Link to="/" className="nav-home">
            <Home />
            <span>HOME</span>
          </Link>
          <Link to="/trending" className="nav-trend">
            <Trending />
            <span>TRENDING</span>
          </Link>
          <Link to="/verified" className="nav-verified">
            <Verified />
            <span>VERIFIED</span>
          </Link>
          <Link to="/collections" className="nav-collections">
            <Collections />
            <span>COLLECTIONS</span>
          </Link>
          <Link to="/" className="nav-search">
            <Search />
            <span>SEARCH</span>
          </Link>
          <Link to="/profile" className="nav-profile">
            <Profile />
            <span>PROFILE</span>
          </Link>
        </nav>
        <button className="hulu-btn">
          <Link to="/">
            <Title />
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Header
