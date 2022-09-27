import Item from './Item'
import { images } from '../assets/data'

const Gallery = () => {
    return (
        <div className="gallery">
            <h1>Realizacje</h1>
            <hr></hr>
            <div className="gallery-container">
                {images.map((item) => (
                    <Item img={item.img}/>
                ))}
            </div>
        </div>
    )

}

export default Gallery;

