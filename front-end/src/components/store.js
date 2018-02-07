import React, { Component } from 'react';

class Store extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      pointUpgrades: 0,
      bonusUpgrades: 0,
      pointRate: 1,
      bonusRate: 1,
      helper: '',
      buttonStatus: {
        point: true,
        bonus: true,
        house: true,
        bank: true
      }
    }

    this.bonusRates = {
      '30secs': '1%',
      '1min': '5%',
      '2mins': '10%',
      '5mins': '25%'
    }

    this.upgrades = {
      point: {update:1, price: 10 },
      bonus: {update: 5, price: 1000},
      house: {price: 5000, rate: 50},
      bank: {price: 10000, rate: 100}
    }

    this.interval = '';

  }


  upgradeHandler = (e) => {
    let name = e.target.name
    let upgrades = name+'Upgrades'
    let rate = name+'Rate'
    this.setState({score: this.state.score-this.upgrades[name].price, [upgrades]: this.state[upgrades]+1, [rate]: this.state[rate]+1})
  }

  helperHandler = e => {
    clearInterval(this.interval)
    let targetName = e.target.name
    this.setState({helper: targetName})
    this.interval = setInterval(()=> this.setState({score: this.state.score+this.upgrades[targetName].rate}), 1000)
  }

  updateButtons = () => {
    let obj = this.upgrades
    for(let key in obj){
      this.state.score >= obj[key].price ?
        this.state.buttonStatus[key] = true :
        this.state.buttonStatus[key] = false
    }
  }

  pointHandler = (e) => {
    this.setState({score: this.state.score+this.state.pointRate})
  }

  render(){
    this.updateButtons()
    console.log(this.state)
    return(
      <div id="side-menu">
         <div id="upgrades">
          <ul>
           <li><div className="upgrade"><button name="point" onClick={this.upgradeHandler} disabled={!this.state.buttonStatus.point}>point</button></div></li>
           <li><div className="upgrade"><button name="bonus" onClick={this.upgradeHandler} disabled={!this.state.buttonStatus.bonus}>bonus</button></div></li>
          </ul>
         </div>
         <div id="helpers">
          <ul>
           <li><div className="helper hidden"><button name="house" onClick={this.helperHandler} disabled={!this.state.buttonStatus.house}>house</button></div></li>
           <li><div className="helper hidden"><button name="bank" onClick={this.helperHandler} disabled={!this.state.buttonStatus.bank}>bank</button></div></li>
          </ul>
         </div>
         <button onClick={this.pointHandler}>CLICK ME</button>
       </div>
    )
  }
}

export default Store
