import React, { Component } from 'react'
import './quest.css'

export default class quest extends Component {

  render () {
    console.log(this.props)
    return (
      <div>

        <div className="content bottom-line">
          <div className="container" style={{paddingTop: 20}}>
            <div>
              <section className="section-padding">
                <div className="container">
                  <div className="text-center mb-80">
                    <div>
                                    <div className='row'>
                                      <div className='centered'>
                                          <img src='/images/slack.png' height="100" width="100" />
                                      </div>

                                    </div>


                                         <div className="status js-response">Draag bij op dit ontwerp</div>
                                         <div className="dialog">
                                           <div className="row">
                                             <form>
                                               <input className="primary js-input" placeholder="Your name" type="text" />
                                               <button className="primary js-button" type="submit">login hier in met Slack</button>
                                             </form>
                                           </div>
                                           <div className="row note">Be less busy. Submit your name and get inside of Slack.</div>
                                         </div>
                                       </div>
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
    )
  }
}
