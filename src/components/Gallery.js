import '../styles/Gallery.scss';

import image1 from "../assets/photos/1.jpeg"
import image3 from "../assets/photos/3.jpeg"
import image4 from "../assets/photos/4.jpeg"
import image5 from "../assets/photos/5.jpeg"
import image6 from "../assets/photos/6.jpeg"
import image7 from "../assets/photos/7.jpeg"
import image8 from "../assets/photos/8.jpeg"
import image9 from "../assets/photos/9.jpeg"
import image10 from "../assets/photos/10.jpeg"
import image11 from "../assets/photos/11.jpeg"

const Gallery = () => {
    return (
        <div className="gallery" id="gallery">
            <h1>REALIZACJE</h1>
            <div className="gallery-container">
                <div className="img-box">
                    <img src={image1} alt="img1" />
                </div>
                <div className="img-box">
                    <img src={image3} alt="img3" />
                </div>
                <div className="img-box">
                    <img src={image4} alt="img4" />
                </div>
                <div className="img-box">
                    <img src={image5} alt="img5" />
                </div>
                <div className="img-box">
                    <img src={image6} alt="img6" />
                </div>
                <div className="img-box">
                    <img src={image7} alt="img7" />
                </div>
                <div className="img-box">
                    <img src={image8} alt="img8" />
                </div>
                <div className="img-box">
                    <img src={image9} alt="img9" />
                </div>
                <div className="img-box">
                    <img src={image10} alt="img10" />
                </div>
                <div className="img-box">
                    <img src={image11} alt="img11" />
                </div>












            </div>
        </div>
    )

}

export default Gallery;

