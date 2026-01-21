
import Navbar from './Navbar'
import Hero from './Hero'

import Section01 from './Section01'
import InfiniteSlider from './InfiniteSlider'
import Section02 from './Section02'


const Main_container = () => {
  return (
    
        <div className='main-container  h-screen'>

          <Navbar/>
          <Hero/>
          <InfiniteSlider/>
          <Section01/>
          <Section02/>
          
          
        </div>
  )
}

export default Main_container