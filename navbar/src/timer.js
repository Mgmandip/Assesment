import React, { Component } from "react";

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            timer: 0,
            isRunning: false,
        };
        this.timerInterval = null; // to store interval ID
    }

    start = () => {
        if (!this.state.isRunning) {
            this.setState({isRunning:true});
            this.timerInterval = setInterval(() =>{
                this.setState((prevState) =>({
                    timer: prevState.timer + 1,
                }));
            }, 200); //incerase time on sec
        }
    };

    stop = () => {
        clearInterval(this.timerInterval);
        this.setState({isRunning: false});
    };

    render(){
        return(
            <div>
            <h1 >Timer: {this.state.timer}</h1>
            <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
            </div>
        );
    }
}

export default Timer;