import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  

class Navbar extends React.Component{
    render() {

        //const {state} = this.props;

        return (
            <Router>
                <div>
                    <ul id="nav">
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
            </Router>
        );
    }
}

export default Navbar;