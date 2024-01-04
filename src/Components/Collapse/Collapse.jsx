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
            <div className= {`collapse__box ${visible}`}> 
            {
                visible && <div  className={`collapse__description ${visible}`}>{description}</div>
            }
            </div>
        </div>
    )
}

export default Collapse;
