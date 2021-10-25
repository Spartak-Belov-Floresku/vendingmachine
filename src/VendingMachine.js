import { BrowserRouter, Route } from "react-router-dom";

import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";
import NavBar from "./NavBar";

const VadingMachine = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Route exact path="/chips">
                <Chips />
            </Route>
            <Route exact path="/soda">
                <Soda />
            </Route>
            <Route exact path="/sardines">
                <Sardines />
            </Route>
        </BrowserRouter>
    )
}

export default VadingMachine;