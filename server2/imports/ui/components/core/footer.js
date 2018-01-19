import React , { Component } from 'react'
import { Link } from 'react-router-dom'

// define and export our Navigation component
export default class footer extends Component {
  displayName() {return ('Navigation')}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <footer>
          <div className="container" style={{marginTop:'10px'}}>
            <div className="row footer-row">
               <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <h4>Bitler</h4>
                <ul className="list-footer">
                  <li><Link to="/about/about-us">Over ons</Link></li>
                  <li><Link to="/about/team">Team</Link></li>
                  <li><Link to="/about/contact">Contact</Link></li>
                  <li><Link to="/about/faq">Faq</Link></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <h4>Zelf kennis aanbieden</h4>
                <ul className="list-footer">
                  {/* <li><Link to="/expert">Aanmelden</Link></li>
                  <li><Link to="/extension">Browser Exentsie</Link></li>
                  <li><Link to="/extension">Videogesprekken ontvangen</Link></li> */}
                  <li><Link to="/terms">Voorwaarden</Link></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <img className="footer-logo" width={75} src="/images/bitler-footer.png" />
              <Link to="/terms" className="terms">Algemene voorwaarden</Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
