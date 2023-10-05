
import './App.css'
import './mediaquery.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Hero from './components/Hero'
import Skills from './components/Skills'

function App() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
