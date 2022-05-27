import './Card.css';
import Glasses from '../../img/glasses.png';

const Card2 = () =>{
    return(
        <div className="card" style={{top:"56rem", left:"22rem"}}>
            <img src={Glasses} alt="" />
            <span>Developer </span>
            <span>Html, Css, JavaScript, React</span>
                <button className='c-button'>LEARN MORE</button>
        </div>
    )
}

export default Card2