import './Card.css';
import Emoji from '../../img/heartemoji.png';

const Card = () =>{
    return(
        <div className="card">
            <img src={Emoji} alt="" />
            <span>Desing </span>
            <span>  Figma, Sketch, Photoshop,
                Adobe, Adobe xd</span>
                <button className='c-button'>LEARN MORE</button>
        </div>
    )
}

export default Card