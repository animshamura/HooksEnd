import React, { Component } from 'react'

export class Timer extends Component {
    interval
   constructor(props){
     super(props)
   
     this.state = {
        timer : 0
     }
   } 
     componentDidMount(){
        this.interval = setInterval(()=> {
            this.setState(prev => ({
                timer : prev.timer + 1
            }))
        },1000)
     }

     TurnOn () {
        this.interval = setInterval(()=> {
            this.setState(prev => ({
                timer : prev.timer + 1
            }))
        },1000)
     }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    
    return (
      <div>
        <h1> Timer : {this.state.timer}</h1>
        <button onClick={clearInterval(this.interval)}>Stop</button>

      </div>
    )
  }
}

export default Timer
