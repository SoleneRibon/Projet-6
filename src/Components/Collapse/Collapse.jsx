import React, { useState } from "react";
import "../Collapse/collapse.scss";
import fleche from "../../assets/fleche.png";


function Collapse () {

    return (
        <div className="collapse">
            <div className="collapse__title"> blabla</div>
             <img src={fleche} alt="Ouvrir cette liste" className="collapse__img"/>
        </div>
    )
}

export default Collapse;