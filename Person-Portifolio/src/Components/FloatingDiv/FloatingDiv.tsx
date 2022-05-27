import React from "react";
import Crown from '../../../src/img/crown.png';
import thumbup from '../../img/thumbup.png'
import './Floating.css'



const FloatingDiv = () =>{

    return(
        <div className="floatingdiv">
            <img src={Crown} alt="" />
            <span>
               Web
                <br/>
                Developer
            </span>
           
        </div>
    )
}



export default FloatingDiv 