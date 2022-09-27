import './sites/index.scss';
import Header from './sites/HeaderSection';
import Nav from './sites/Nav';
import Offer from './sites/Offer';
import Gallery from './sites/Gallery';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


const App = () => {

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline()

      .from(".prefix__st2", {drawSVG: "50% 50%",duration: 4})

      .to(".prefix__st2", {
        duration:1,
        fill:"#cad2c5",
        stroke:"none"
      })
      .from(".nav-container", {
        yPercent: -100,
        duration: 1,
        ease: "bounce"
      })
      .from(".header-text", {
        opacity: 0,
        duration:2,
      })
      .from(".offer-txt", {
        opacity:0,
        duration:1,
      })
      .from(".row",  {
        xPercent: 100,
        stagger: 0.1,
        duration: 2
      })
  }, [])
  
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Offer></Offer>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
