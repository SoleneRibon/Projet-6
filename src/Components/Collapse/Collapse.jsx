import React, { useState } from "react";
import "../Collapse/collapse.scss";
import fleche from "../../assets/fleche.png";


function Collapse ({titre, description, className1, className2}) {

    const [visible, setVisible] = useState(false);

    const testClick = () => {
        setVisible(!visible)
    }

    return (
        <div className={className1} >
            <div className={className2}>
                <div className="collapse__title">{titre}</div>
                <img onClick={testClick} 
                src={fleche} 
                alt="Ouvrir cette liste" 
                className= {`collapse__img ${visible ? "true" : ""}`}/>
            </div> 
            
            <div className= {`collapse__box ${visible ? "true" : "false"}`}> {description} 
            
           
            </div>
        </div>
    )
}

export default Collapse;
