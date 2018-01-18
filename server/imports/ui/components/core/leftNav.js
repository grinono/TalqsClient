import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// define and export our Navigation component
export default class leftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if(window.location.pathname == "/about/team") {
        this.setState({teamActive : "active"})
        this.setState({aboutActive : "other"})
    } 
    if(window.location.pathname == "/about/about-us") {
        this.setState({aboutActive : "active"})
         this.setState({teamActive : "other"})
    } 
  }


  render() {
    return (
    	 <div className="content bottom-line">
          <div className="container" style={{paddingTop: 20}}>
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3" style={{paddingTop: 35}}>
                <ul className="list-nav">
                  <li className={this.state.aboutActive}> <Link to="/about/about-us">Over ons</Link></li>
                  <li className={this.state.teamActive}> <Link to="/about/team">Team</Link></li>
                 {/*
                    <li className={this.teamCheck()}> <Link to="/about/team">Team</Link></li>
                 */} 
                </ul>
              </div>
            
              	{this.props.child}

            </div>
          </div>
        </div>	
    );
  }
}
