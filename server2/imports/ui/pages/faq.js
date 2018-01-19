import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class faq extends Component {
  render () {
    //  console.log(this.props.location.pathname)
    return (
      <div>
        <div className="content bottom-line">
          <div className="container" style={{paddingTop: 20}}>
            <div className="row">
              <div className="col-xs-12 col-sm-9 col-md- col-lg-9">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 double-col">
                  <h3>Veel gestelde vragen</h3>
                  <p>Kijk op onze Medium Blog om vragen beantwoord te krijgen.
                    <Link style={{color: '#337ab7'}} to="https://medium.com/bitler" target="_blank">  Blog Page  </Link>
                    Als dit je niet help. Anders stuur een email naar <Link style={{color: '#337ab7'}} to="vraag@bitler.co"> vraag@bitler.co </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
