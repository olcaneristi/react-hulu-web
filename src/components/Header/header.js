import React from "react"
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
          <a href="/home" className="nav-home">
            <Home />
            <span>HOME</span>
          </a>
          <a href="/#" className="nav-trend">
            <Trending />
            <span>TRENDING</span>
          </a>
          <a href="/#" className="nav-verified">
            <Verified />
            <span>VERIFIED</span>
          </a>
          <a href="/#" className="nav-collections">
            <Collections />
            <span>COLLECTIONS</span>
          </a>
          <a href="/#" className="nav-search">
            <Search />
            <span>SEARCH</span>
          </a>
          <a href="/#" className="nav-profile">
            <Profile />
            <span>PROFILE</span>
          </a>
        </nav>
        <button className="hulu-btn">
          <a href="/#">
            <Title />
          </a>
        </button>
      </div>
    </section>
  )
}

export default Header
