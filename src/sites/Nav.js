import './index.scss';
import MiniLogo from '../assets/miniLogo';


const Nav = () => {

      return (
        <div className="nav-container">
            <MiniLogo />
            <ul>
                <li><a href="news.asp">OFERTA</a></li>
                <li><a href="contact.asp">REALIZACJE</a></li>
                <li><a href="about.asp">KONTAKT</a></li>
            </ul>
        </div>
    )

}

export default Nav;