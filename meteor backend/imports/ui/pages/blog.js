import React, { Component } from 'react'
import '../style/font-awesome.min.css'

export default class blog extends Component {

  render() {
     console.log(this.props.location.pathname)
    return (
      <div>

        <div className="content bottom-line">
          <div className="container" style={{paddingTop: 20}}>
                      <div>
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-80">
              <h2 className="section-title text-uppercase">Goede tijd gehad op ons Blog?</h2>
              <p className="section-sub">heb je nog ideeen? Altijd welkom.<br/><br/><br/><br/><br/><br/></p>
            </div>

          </div>
        </section>
        {/* contact-form-section End */}
        {/* map-section */}
        <div id="myMap" className="height-350" />
        {/* /.map-section */}
      </div>
          </div>
        </div>
      </div>
    );
  }
}
