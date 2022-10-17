import '../styles/Header.scss';
import SVG from '../assets/svg';
import ilustration from '../assets/ilustration.svg';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

const Header = () => {
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    
    gsap.timeline()
      .to("body",{overflow: "hidden"})

      .from(".prefix__st2", {drawSVG: "50% 50%",duration: 4})

      .to(".prefix__st2", {fill: '#F1F1F1'})

      .to("body", {overflowY:"visible"})

      .to(".ilustration", {y:-100, yoyo:true, repeat:-1, duration:4})
    

  }, [])

  return (
    <div className="HeaderSection">
      <div className="Navigation">
        <ul>
          <li><a href="#offer">OFERTA</a></li>
          <li><a href="#gallery">REALIZACJE</a></li>
          <li><a href="#contact">KONTAKT</a></li>
        </ul>
      </div>
      <div className='Logo-container'>
        <div className='bg'></div>
        <SVG className='svg'/>
        <img src={ilustration} className='ilustration'></img>
        <div className='text-zone'>
        <h1>Remonty, oraz kompleksowe wykończenie wnętrz.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error sit pariatur consequatur aliquam? Suscipit nostrum sapiente, dolorem delectus odio, laudantium inventore, consequuntur eius nulla totam earum aliquid modi similique!</p>
        </div>
      </div>
    </div>
  );
}

export default Header;