import './Toogle.css';
import { FaRegMoon} from 'react-icons/fa';
import {FaRegSun} from 'react-icons/fa';

const Toogle = () =>{
    return(
        <div className="toogle">
            <FaRegSun/>
            <FaRegMoon/>
            <div className="t-button">

            </div>
        </div>
      
    )
}

export default Toogle