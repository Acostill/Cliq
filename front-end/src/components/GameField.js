import React from "react";
import ReactInterval from 'react-interval';


class GameField extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      cookies: 0,
      disableFivePer: true,
      disableTenPer: true,
      disableFifteenPer: true,
      disableTwentyPer: true
    }
  }

  addOneCookie = () => {
    const { cookies } = this.state;
    this.setState({
      cookies: cookies + 1
    })
  }

  addFivePercent = () => {
    const { cookies } = this.state;

    this.setState({
      cookies: Math.ceil(cookies * 0.05 + cookies)
    })
  }

  addTenPercent = () => {
    const { cookies } = this.state;

    this.setState({
      cookies: Math.ceil(cookies * 0.10 + cookies)
    })
  }

  addFifteenPercent = () => {
    const { cookies } = this.state;
    this.setState({
      cookies: Math.ceil(cookies * 0.15 + cookies)
    })
  }

  addTwentyPercent = () => {
    const { cookies } = this.state;

    this.setState({
      cookies: Math.ceil(cookies * 0.20 + cookies)
    })
  }


wakeButtonFivePer = () => {
  const { disableFivePer } = this.state;
    if (disableFivePer) {
      setInterval(()=> {
      this.setState({
        disableFivePer: false
      })
      setTimeout(()=> {
        this.setState({
          disableFivePer: true
        })
      }, 3000)
    }, 30000)
  }
}

wakeButtonTenPer = () => {
  const { disableTenPer } = this.state;
    if (disableTenPer) {
      setInterval(()=> {
      this.setState({
        disableTenPer: false
      })
      setTimeout(()=> {
        this.setState({
          disableTenPer: true
        })
      }, 3000)
    }, 60000)
  }
}

wakeButtonFifteenPer = () => {
  const { disableFifteenPer } = this.state;
    if (disableFifteenPer) {
      setInterval(()=> {
      this.setState({
        disableFifteenPer: false
      })
      setTimeout(()=> {
        this.setState({
          disableFifteenPer: true
        })
      }, 3000)
    }, 120000)
  }
}

wakeButtonTwentyPer = () => {
  const { disableTwentyPer } = this.state;
    if (disableTwentyPer) {
      setInterval(()=> {
      this.setState({
        disableTwentyPer: false
      })
      setTimeout(()=> {
        this.setState({
          disableTwentyPer: true
        })
      }, 3000)
    }, 300000)
  }
}
componentDidMount(){
  this.wakeButtonFivePer();
  this.wakeButtonTenPer();
  this.wakeButtonFifteenPer();
  this.wakeButtonTwentyPer();
}
  render () {
    const { cookies, disableFivePer, disableTenPer,
            disableFifteenPer, disableTwentyPer } = this.state;
    return (
      <div>
        <h1>{cookies}</h1>
        <br></br>
        <button onClick={this.addOneCookie}>Add 1 Cookie</button>{" "}
        <button onClick={this.addFivePercent} disabled={disableFivePer}>5%</button>{" "}
        <button onClick={this.addTenPercent} disabled={disableTenPer}>10%</button>{" "}
        <button onClick={this.addFifteenPercent} disabled={disableFifteenPer}>15%</button>{" "}
        <button onClick={this.addTwentyPercent} disabled={disableTwentyPer}>20%</button>{' '}
      </div>
    )
  }
}
export default GameField;
