import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Team from './team';
import Company from './company';
import { Route } from 'react-router';
class About extends Component {
    render() { 
        return(
        <React.Fragment>
        <h2>About</h2>;
        <div className="row">
            <div className="col-3">
                <ul>
                <li>
                    <Link to="/about/team" >Our Teem</Link>  
                </li>
                
                <li>
                    <Link to="/about/company">Our Company</Link>
                </li>
                </ul>
            </div>
            <div className="col">
            <Route path="/about/company" component={Company} />
            <Route path="/about/team" component={Team} />

            </div>
        </div>
         
        
        </React.Fragment>
        );
}
}
 
export default About;