import React, { Component } from 'react';

class Store extends Component {
  
  render(){
    return(
      <div id="side-menu">
         <div id="upgrades">
           <div className="upgrade"></div>
           <div className="upgrade"></div>
         </div>
         <div id="helpers">
           <div className="helper"></div>
           <div className="helper"></div>
         </div>
       </div>
    )
  }
}

export default Store
