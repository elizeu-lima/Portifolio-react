import React from "react";

import thumbup from '../../img/thumbup.png'
import './Floating.css'

const FloatingDiv1 = () =>{
    return(
        <div className="floatingdiv1">
        <img src={thumbup} alt="" />
        <span>
            Best Desing
            <br />
            Award
        </span>
    </div>
    )
}

export default FloatingDiv1