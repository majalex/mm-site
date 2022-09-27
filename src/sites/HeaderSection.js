import './index.scss';
import SVG from '../assets/svg';

const Header = () => {

  return (
    <div className="header">
      <div className='header-logo'>
        <SVG />
      </div>
      <div className='header-text'>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      </div>
    </div>
  );
}

export default Header;