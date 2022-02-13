import React, { Component } from 'react';
//stateless functional Component

class NavBar extends React.Component {

    

    render() { 
        let classes_changing = "badge  m-2 bg-";
            classes_changing += parseInt(this.props.totalCounters) > 0 ? "primary" : "danger";
        return (
       
          <div className="style_navbar"  >
                <div className="container">
                    <h2 className="navbar-brand"  > Counter 
                    <span className={classes_changing}>{this.props.totalCounters}</span>
                    </h2>          
               </div>
            </div>
          );

    }
}
 

 
export default NavBar;