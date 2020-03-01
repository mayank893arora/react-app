import React ,{Component} from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import Blog from './pages/blog'

class App extends Component{
  render(){
      return(
<div class>
  <Navbar/>
  <Home/>
  <About/>
  <Services/>
  <Blog/>
  <Contact/>
  <Footer/>
</div>
      );
  }
}

export default App