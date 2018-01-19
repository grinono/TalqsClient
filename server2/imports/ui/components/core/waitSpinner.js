import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress';

export default class spinner extends Component {

  render() { 
    return (
             <div className="text-center" style={{margin:"10% 0 800px 0"}}> 
                <CircularProgress color={"#1585e0"} size={120} thickness={8} />
             </div>
    );
  }
}

