import '../styles/Offer.scss';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';


const Offer = () => {



    return (
        <div className="offer-container" id="offer">
            <div className="offer-txt">
                <h1>OFERTA</h1>
            </div>
            <div className="offer-icons">
                <div className="row">
                    <div className="icon-r"><img src={icon1} alt='icon1'></img></div>
                    <div className="txt-l">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Curabitur pulvinar urna sed sagittis accumsan.</li>
                            <li>Suspendisse porttitor risus nec quam tincidunt bibendum.</li>
                            <li>Nulla finibus velit at erat tincidunt consectetur.
                            </li>
                            <li>Aenean interdum quam vitae ornare pellentesque.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-l"><img src={icon2} alt='icon2'></img></div>
                    <div className="txt-r">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi erat, venenatis ut odio et, cursus scelerisque tortor. Suspendisse ultricies porttitor faucibus. Aliquam rhoncus mi eget erat vestibulum, nec tempor mauris vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum eu neque mi. Suspendisse fermentum odio ut libero sollicitudin euismod. Duis interdum lectus ut eros tempor feugiat. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-r"><img src={icon3} alt='icon3'></img></div>
                    <div className="txt-l">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Curabitur pulvinar urna sed sagittis accumsan.</li>
                            <li>Suspendisse porttitor risus nec quam tincidunt bibendum.</li>
                            <li>Nulla finibus velit at erat tincidunt consectetur.
                            </li>
                            <li>Aenean interdum quam vitae ornare pellentesque.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-l"><img src={icon4} alt='icon4'></img></div>
                    <div className="txt-r">
                        <p>Mauris aliquam commodo nulla, vitae cursus eros vehicula id. Vivamus lobortis purus eu tempor varius. Nulla facilisi. Integer purus dolor, accumsan at ullamcorper at, aliquet sit amet odio. Praesent viverra, enim mattis interdum laoreet, est nisi placerat velit, et maximus ante felis vitae augue. Vestibulum tincidunt tincidunt dapibus. Mauris ullamcorper dictum malesuada. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-r"><img src={icon5} alt='icon5'></img></div>
                    <div className="txt-l">
                        <p>Quisque sit amet tortor venenatis, tristique augue ac, finibus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod aliquam purus eu varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;