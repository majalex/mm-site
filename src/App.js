import './sites/index.scss';
import Header from './sites/HeaderSection';
import Nav from './sites/Nav';
import Offer from './sites/Offer';
import Gallery from './sites/Gallery';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Contact from './sites/Contact';


const App = () => {

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    //gsap.fromTo("*", {overflow:"hidden"}, {overflow:"visible", duration:5})
    
    gsap.timeline()
      .to("body",{overflow: "hidden"})

      .from(".prefix__st2, .border", {drawSVG: "50% 50%",duration: 4})

      .to(".prefix__st2", {
        duration:1,
        fill:"#cad2c5",
        stroke:"none"
      })
      .from(".nav-container", {
        yPercent: -100,
        duration: 1,
        ease: "circ"
      })

      .to("body", {overflowY:"visible"})

      .from(".header-text", {
        opacity: 0,
      })
      .from(".offer-txt", {
        opacity:0,
        duration:2
      })
      .from(".txt-l",  {
        xPercent: -300,
        stagger: 0.1,
        duration: 1,
        ease: "back"
      })
      .from(".icon-r",  {
        xPercent: 300,
        stagger: 0.1,
        duration: 1,
        ease: "back"

      })
      .from(".txt-r",  {
        xPercent: 300,
        stagger: 0.1,
        duration: 1,
        ease: "back"
      })
      .from(".icon-l",  {
        xPercent: -300,
        stagger: 0.1,
        duration: 1,
        ease: "back"
      })


  }, [])
  
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Offer></Offer>
      <Gallery></Gallery>
      <Contact></Contact>
    </div>
  );
}

export default App;
