import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed:0}
  onAccelerate = ()=>{
    this.setState((prevState)=>{
      if(prevState.speed<200){
          return {speed:prevState.speed+10}
      }else if(prevState.speed===200){
        return {speed:200}
      }
    })

  }

  onApplyBrake = ()=>{
    this.setState((prevState)=>{
      if(prevState.speed>0){
        return {speed:prevState.speed-10}
      }
      else if(prevState.speed===0)
      {
        return {speed:0}
      }
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h1 className="description">
          Speed is
          <span> {speed}mph</span>
        </h1>
        <p className="description-2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="btn" type="button" onClick={this.onAccelerate}>Accelerate</button>
          <button className="btn brake" type="button" onClick={this.onApplyBrake}>Apply Brake</button>
        </div>
      </div>
    )
  }
}

export default Speedometer
