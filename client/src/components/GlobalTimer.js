import React, { Component } from 'react';
import "../App.css";


class GlobalTimer extends Component {
    render(){
        return(
            <div className="globaltimer-container">
                <div className="globaltimer-header">TIME TO COMPLETE:</div>
                <div className="globaltimer-time">3:30:00</div>
            </div>
        )
    }

}

export default GlobalTimer;