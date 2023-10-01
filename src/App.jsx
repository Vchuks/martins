
import './App.css'
import About from './components/molecules/About'
import Faq from './components/molecules/Faq'
import Hero from './components/molecules/Hero'
import Join from './components/molecules/Join'
import Member from './components/molecules/Member'
import Navbar from './components/molecules/Navbar'
import Testimonial from './components/molecules/Testimonial'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Member/>
      <Testimonial/>
      <Join/>
      <Faq/>
    </>
  )
}

export default App
