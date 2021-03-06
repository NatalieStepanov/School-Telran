import React, { Component } from 'react';
import '../css/Counter.css'

export default class Counter extends Component{
    state = {
        count: 0
    }

    inc=()=>{
        const newState = {...this.state};
        newState.count++
        this.setState(newState)
        console.log(this.state.count)
    }

    dec=()=>{
        const newState = {...this.state};
        newState.count--
        this.setState(newState)
        console.log(this.state.count)
    }

    render(){
        return(
            <div className = 'counter'>
                <h4>Stuck: {this.state.count}</h4>
                <button onClick = {this.inc}>-</button>
                <button onClick = {this.dec}>+</button>
            </div>
        )
    }

    
}

