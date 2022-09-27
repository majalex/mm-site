import { faBrush, faPaintRoller, faPencilRuler, faRulerCombined, faScrewdriverWrench, faTrowelBricks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

const Offer = () => {



    return (
        <div className="offer-container">
            <div className="offer-txt">
                <h1>OFERTA</h1>
                <hr />
            </div>
            <div className="offer-icons">
                <div className="row">
                    <div className="icon-l"><FontAwesomeIcon icon={faPencilRuler} /></div>
                    <div className="txt-r">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi erat, venenatis ut odio et, cursus scelerisque tortor. Suspendisse ultricies porttitor faucibus. Aliquam rhoncus mi eget erat vestibulum, nec tempor mauris vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum eu neque mi. Suspendisse fermentum odio ut libero sollicitudin euismod. Duis interdum lectus ut eros tempor feugiat. Phasellus pretium, nulla quis faucibus egestas, tortor risus porta mauris, at rutrum velit purus nec massa. Fusce leo quam, cursus et venenatis at, congue non felis. Maecenas sagittis luctus risus sit amet auctor. Morbi viverra consequat nisi eu hendrerit. Donec non dictum leo, quis faucibus neque. Nam efficitur ex quis risus vestibulum venenatis.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-r"><FontAwesomeIcon icon={faRulerCombined} /></div>
                    <div className="txt-l">
                        <p>Praesent eu magna aliquam, ultrices mauris id, auctor turpis. Sed eu dui fringilla, iaculis nisl id, vehicula urna. Morbi quis dui magna. Aenean porttitor justo facilisis purus suscipit dapibus. Duis porta arcu accumsan nisi lobortis, a sagittis neque pretium. Donec finibus augue non dignissim placerat. Nam vestibulum laoreet ante ac lobortis. Nunc pulvinar diam molestie, volutpat risus quis, tincidunt lacus. Pellentesque condimentum, lacus sed sodales semper, tortor massa mollis massa, vitae pellentesque lectus risus in nisi. Ut dictum arcu at tortor porta interdum. Phasellus aliquam et ligula quis tincidunt. Integer maximus tellus vel nunc fringilla, tincidunt accumsan ipsum lacinia.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-l"><FontAwesomeIcon icon={faTrowelBricks} /></div>
                    <div className="txt-r">
                        <p>Mauris aliquam commodo nulla, vitae cursus eros vehicula id. Vivamus lobortis purus eu tempor varius. Nulla facilisi. Integer purus dolor, accumsan at ullamcorper at, aliquet sit amet odio. Praesent viverra, enim mattis interdum laoreet, est nisi placerat velit, et maximus ante felis vitae augue. Vestibulum tincidunt tincidunt dapibus. Mauris ullamcorper dictum malesuada. Nulla semper urna at mi efficitur, sed fermentum augue rhoncus. Proin auctor gravida nisi ac convallis. Vivamus et metus tincidunt lacus dapibus suscipit. Curabitur finibus massa lectus, vel consequat felis condimentum vel. Vivamus maximus ut eros vehicula convallis. Nunc sodales lorem ante, quis congue risus interdum et. Donec venenatis tristique arcu, vitae consectetur leo suscipit ac.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-r"><FontAwesomeIcon icon={faPaintRoller} /></div>
                    <div className="txt-l">
                        <p>Sed id placerat leo. Cras id semper mi, vel auctor ante. Duis eget tellus sed quam vulputate consequat. In suscipit tortor quis nulla sodales, eget placerat sapien mattis. Proin nisi elit, venenatis sit amet viverra congue, fermentum congue nibh. Integer ac mattis magna. Nullam luctus fermentum eros eu elementum. Proin porttitor libero a luctus lobortis. Vivamus fringilla ligula vitae felis volutpat, ut rutrum nisl ultricies. Quisque convallis sapien est, blandit mattis eros suscipit id. Vivamus eget orci quis ante facilisis mattis. Mauris congue, mi et rutrum sollicitudin, ligula justo lacinia est, eget pharetra dolor nisl quis dui. Aenean non lacinia est.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-l"><FontAwesomeIcon icon={faScrewdriverWrench} /></div>
                    <div className="txt-r">
                        <p>Quisque sit amet tortor venenatis, tristique augue ac, finibus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod aliquam purus eu varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent est ipsum, laoreet eu elit sit amet, sollicitudin feugiat enim. Phasellus felis magna, porttitor vitae sodales sagittis, euismod a neque. Donec et est at nibh tincidunt mollis. Mauris ut lorem in nibh blandit efficitur sed at magna. Cras eu magna id purus varius viverra non eu dolor. Morbi venenatis vitae est ac mollis. Sed ut interdum purus, quis laoreet mauris.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="icon-r"><FontAwesomeIcon icon={faBrush} /></div>
                    <div className="txt-l">
                        <p>Sed id placerat leo. Cras id semper mi, vel auctor ante. Duis eget tellus sed quam vulputate consequat. In suscipit tortor quis nulla sodales, eget placerat sapien mattis. Proin nisi elit, venenatis sit amet viverra congue, fermentum congue nibh. Integer ac mattis magna. Nullam luctus fermentum eros eu elementum. Proin porttitor libero a luctus lobortis. Vivamus fringilla ligula vitae felis volutpat, ut rutrum nisl ultricies. Quisque convallis sapien est, blandit mattis eros suscipit id. Vivamus eget orci quis ante facilisis mattis. Mauris congue, mi et rutrum sollicitudin, ligula justo lacinia est, eget pharetra dolor nisl quis dui. Aenean non lacinia est.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;