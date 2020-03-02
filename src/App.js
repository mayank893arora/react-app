import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import Blog from './pages/blog'

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Navbar />
          <Route exact path="/" Component={Home} />
          <Route exact path="/" Component={About} />
          <Route exact path="/" Component={Services} />
          <Route exact path="/" Component={Blog} />
          <Route exact path="/" Component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App