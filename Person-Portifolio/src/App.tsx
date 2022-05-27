
import './App.css'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Portifolio from './Components/Portifolio/Portifolio'
import Services from './Components/Services/Services'
import Testemonial from './Components/Testimonial/Testemonial'
import Works from './Components/Works/Works'
import Intro from './Intro/Intro'

function App() {
  

  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portifolio/>
      <Testemonial/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
