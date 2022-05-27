import './Footer.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


import Wave from '../../img/wave.png';


const Footer = () =>{
    return(
        <div className="footer">
            <img src={Wave} alt="" style={{width:'100%' }} />
            <div className="f-content">
                <span>elizeucoca@gmail.com</span>
                <div className="f-icons">
                <h3><FaLinkedinIn/></h3>
                <h3><FaInstagram/></h3>
                <h3><FaGithub/></h3>
              </div>
            </div>
        </div>
    )
}



export default Footer