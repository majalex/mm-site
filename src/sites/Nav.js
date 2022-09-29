import './index.scss';
import MiniLogo from '../assets/miniLogo';


const Nav = () => {

      return (
        <div className="nav-container">
            <MiniLogo />
            <ul>
                <li><a href="#offer">OFERTA</a></li>
                <li><a href="#gallery">REALIZACJE</a></li>
                <li><a href="#contact">KONTAKT</a></li>
            </ul>
        </div>
    )

}

export default Nav;