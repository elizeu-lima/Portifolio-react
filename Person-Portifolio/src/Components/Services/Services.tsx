import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Card2 from '../Card/Card2';
import Card3 from '../Card/Card3';
import Resume from './Resume.pdf';

const Services = () =>{
    return(
        <div className="services">
            {/* left side*/}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                I’m partial to air conditioning. I’m thinking two circus clowns dancing. You? 
                <br />
                This man is a knight in shining armor. I’m really more an apartment person.
                </span>

                <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            
            {/* right side */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card/>
                </div>
            </div>
            {/*second card */}
            <div style={{top:"12rem", left:"-4rem"}}>
                <Card2/>
            </div>
            {/*3rd card */}
            <div style={{top: "19rem", left:"12rem"}}>
                <Card3/>
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

        </div>
    )
}

export default Services