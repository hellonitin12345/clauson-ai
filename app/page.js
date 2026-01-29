import FAQ from "./components/FaqSection";
import HelpSection from "./components/HelpSection";
import Hero from "./components/Hero";
import InfiniteSlider from "./components/InfiniteSlider";
import PracticeSlider from "./components/CardSlider";
import PracticeSliderOppo from "./components/CardSliderReverse";
import Pricing from "./components/Pricing";
import Section01 from "./components/Section01";
import Section02 from './components/Section02'
import Section03 from "./components/Section03";




export default function Home() {
  return (
    <>
    <Hero/>
    <InfiniteSlider/>
    <Section01/>
    <Section02/>
    <Section03/>
    <PracticeSlider/>
    <PracticeSliderOppo/>
    <Pricing/>
    <FAQ/>
    <HelpSection/>
   
    </>
  );
}
