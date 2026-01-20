
import Navbar from './Navbar'
import Hero from './Hero'
import Slider from './Slider'
import Section01 from './Section01'


const Main_container = () => {
  return (
    
        <div className='main-container  h-screen'>

          <Navbar/>
          <Hero/>
          <Slider/>
          <Section01/>
          
        </div>
  )
}

export default Main_container