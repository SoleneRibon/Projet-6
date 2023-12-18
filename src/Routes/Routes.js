import React from "react";

import { Route, Switch} from 'react-router-dom';

import errorPage from "../Pages/errorPage";
import Home from "../Pages/Home/Home";
import ficheLogement from "../Pages/ficheLogements/Logement";
import aPropos from "../Pages/aPropos/Propos";

function Routes(){
    <Switch>
        
        <Route
        path='/'
        exact component={Home}
        />

        <Route
        path='/ficheLogement'
        exact component={ficheLogement}
        />

    </Switch>
}

export default Routes;