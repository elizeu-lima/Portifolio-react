import './Card.css';
import Humble from '../../img/humble.png';

const Card3 = () =>{
    return(
        <div className="card" style={{top:"63.8rem", left:"39.5rem"}}>
            <img src={Humble} alt="" />
            <span>UI/UX </span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam. </span>
            <button className='c-button'>LEARN MORE</button>
        </div>
    )
}

export default Card3