import { Component } from "react";
import './index.css'

class Random extends Component{
    state={
        random:'displays here',
    }

    genrator=()=>{
        let num=Math.floor(Math.random()*100);
        this.setState({random:num})
    }

    render(){
        const {random}=this.state

        return(
            <div className="box1">
                <div className="box2">
                    <h1>Random number Genrator from 1 TO 100</h1>
                    <p className="p3">{random}</p>
                    <button onClick={this.genrator}>Genrate</button>
                </div>
            </div>
        )
    }
}

export default Random;