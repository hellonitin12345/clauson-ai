
import Navbar from './Navbar'
import Hero from './Hero'

import Section01 from './Section01'
import InfiniteSlider from './InfiniteSlider'
import Section02 from './Section02'
import Section03 from './Section03'
import PracticeSlider from './PracticeSlider'
import PracticeSliderOppo from './PracticeSliderOppo'
import Pricing from './Pricing'
import FaqSection from './FaqSection'
import HelpSection from './HelpSection'
import PaperlessSection from './PaperLessSection'



const Main_container = () => {
  return (
    
        <div className='main-container   h-screen'>

          <Navbar/>
          <Hero/>
          <InfiniteSlider/>
          <Section01/>
          <Section02/>
          <Section03/>
          <PracticeSlider/>
          <PracticeSliderOppo/>
          <Pricing/>
          <FaqSection/>
          <HelpSection/>
          <PaperlessSection/>
          
          
          
        </div>
  )
}

export default Main_container