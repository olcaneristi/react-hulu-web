import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./components/assets/index.scss"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

import { Home, Trending, Verified, Collections, Profile } from "./pages"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/verified" component={Verified} />
          <Route path="/collections" component={Collections} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
