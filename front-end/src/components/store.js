import React, { Component } from 'react';

class Store extends Component {
  constructor(props){
    super(props);
    this.state = {
      points: 0,
      pointUpgrades: 0,
      bonusUpgrades: 0,
      helper: false,
      pointRate: 1,
      bonusRate: 1,
      helperLevel: 0,
      helperStatus: {
        house: false,
        bank: false
      }
    }

    this.bonusRates = {
      '30secs': '1%',
      '1min': '5%',
      '2mins': '10%',
      '5mins': '25%'
    }

  }


  upgradeHandler = (e) => {
    let name = e.target.name
    let upgrades = name+'Upgrades'
    let rate = name+'Rate'
    this.setState({[upgrades]: this.state[upgrades]+1})
  }

  helperInitHandler = (e) => {
    let helperStatus = this.state.helperStatus
    helperStatus.house = true
    !this.state.helper ?
    this.setState({helper: true, helperLevel: 1}) :
    this.setState({helperLevel: this.state.helperLevel+1, helperStatus: helperStatus})
  }

  helperHandler = (e) => {

  }

  render(){
    console.log(this.state)
    return(
      <div id="side-menu">
         <div id="upgrades">
          <ul>
           <li><div className="upgrade"><button name="point" onClick={this.upgradeHandler}>point</button></div></li>
           <li><div className="upgrade"><button name="bonus" onClick={this.upgradeHandler}>bonus</button></div></li>
           <li><div className="upgrade"><button name="helper" onClick={this.helperInitHandler}>helper</button></div></li>
          </ul>
         </div>
         <div id="helpers">
          <ul>
           <li><div className="helper hidden"><button name="house" onClick={this.helperHandler} disabled={!this.state.helperStatus.house}>house</button></div></li>
           <li><div className="helper hidden"><button name="bank" onClick={this.helperHandler} disabled={!this.state.helperStatus.bank}>bank</button></div></li>
          </ul>
         </div>
       </div>
    )
  }
}

export default Store
