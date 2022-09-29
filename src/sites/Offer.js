import { faBrush, faPaintRoller, faPencilRuler, faRulerCombined, faScrewdriverWrench, faTrowelBricks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

const Offer = () => {



    return (
        <div className="offer-container" id="offer">
            <div className="offer-txt">
                <h1>OFERTA</h1>
                <hr />
            </div>
            <div className="offer-icons">
                <div className="row">
                    <div className="icon-r"><FontAwesomeIcon icon={faPencilRuler} /></div>
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
                    <div className="icon-l"><FontAwesomeIcon icon={faRulerCombined} /></div>
                    <div className="txt-r">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi erat, venenatis ut odio et, cursus scelerisque tortor. Suspendisse ultricies porttitor faucibus. Aliquam rhoncus mi eget erat vestibulum, nec tempor mauris vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum eu neque mi. Suspendisse fermentum odio ut libero sollicitudin euismod. Duis interdum lectus ut eros tempor feugiat. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-r"><FontAwesomeIcon icon={faTrowelBricks} /></div>
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
                    <div className="icon-l"><FontAwesomeIcon icon={faPaintRoller} /></div>
                    <div className="txt-r">
                        <p>Mauris aliquam commodo nulla, vitae cursus eros vehicula id. Vivamus lobortis purus eu tempor varius. Nulla facilisi. Integer purus dolor, accumsan at ullamcorper at, aliquet sit amet odio. Praesent viverra, enim mattis interdum laoreet, est nisi placerat velit, et maximus ante felis vitae augue. Vestibulum tincidunt tincidunt dapibus. Mauris ullamcorper dictum malesuada. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-r"><FontAwesomeIcon icon={faScrewdriverWrench} /></div>
                    <div className="txt-l">
                        <p>Quisque sit amet tortor venenatis, tristique augue ac, finibus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod aliquam purus eu varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-l"><FontAwesomeIcon icon={faBrush} /></div>
                    <div className="txt-r">
                        <p>Sed id placerat leo. Cras id semper mi, vel auctor ante. Duis eget tellus sed quam vulputate consequat. In suscipit tortor quis nulla sodales, eget placerat sapien mattis. Proin nisi elit, venenatis sit amet viverra congue, fermentum congue nibh. Integer ac mattis magna. Nullam luctus fermentum eros eu elementum. Proin porttitor libero a luctus lobortis. Vivamus fringilla ligula vitae felis volutpat, ut rutrum nisl ultricies. Quisque convallis sapien est, blandit mattis eros suscipit id. Vivamus eget orci quis ante facilisis mattis. Mauris congue, mi et rutrum sollicitudin, ligula justo lacinia est, eget pharetra dolor nisl quis dui.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;