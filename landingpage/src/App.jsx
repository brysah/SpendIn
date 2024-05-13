
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { SucessStories } from "./components/SucessStories";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

function App() {
  const [hasSpend, setHasSpend] = useState(true);
  const [isScroll,setIsScroll] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 90) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
      <Header isScroll={isScroll}/>
      <Hero/>
      <Benefits/>
      <HowItWorks/>
      <SucessStories hasSpend={hasSpend} setHasSpend={setHasSpend}/>
      <Testimonials/>
      <Pricing/>
      <Footer/> 
    </>
  );
}

export default App;
