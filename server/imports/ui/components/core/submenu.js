import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// define and export our Navigation component
export default class submenu extends Component {
  aboutCheck () {
    if(window.location.pathname == "/about/about-us" || window.location.pathname  == "/about/team" ) {
        return("active")
    }
  }

  faqCheck () {
     if(window.location.pathname == "/faq") {
        return("active")
    }
  }

  contactCheck() {
     if(window.location.pathname == "/contact") {
        return("active")
    }
  }

  toBlog  () {
    window.open('https://medium.com/bitler')
  }


  render() {
    console.log()
    return (
      <nav>
      <div>
          <div className="nav-sub">
            <div className="container">
              <ul className="nav navbar-sub">
                 <li className={this.aboutCheck()}><Link to="/about/about-us">Over Bitler</Link></li>
                 <li className={this.faqCheck()}><Link to="/about/faq">Faq</Link></li>
                 <li className={this.contactCheck()}><Link to="/about/contact">Contact</Link></li>
                 <li onClick={()  => this.toBlog()} className={this.contactCheck()}><Link to="/about/blog">Blog</Link></li>

              </ul>
            </div>
          </div>
      </div>
      </nav>
    );
  }
}
