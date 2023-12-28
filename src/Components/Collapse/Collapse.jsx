import React, { useState } from "react";
import "../Collapse/collapse.scss";
import fleche from "../../assets/fleche.png";


function Collapse ({titre, description}) {

    const [visible, setVisible] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse__header">
                <div className="collapse__title">{titre}</div>
                <img onClick={() => setVisible(!visible)} src={fleche} alt="Ouvrir cette liste" className= {`collapse__img ${visible}`}/>
            </div> 
            {
                visible && <div  className="collapse__description">{description}</div>
            }
        </div>
    )
}

export default Collapse;
