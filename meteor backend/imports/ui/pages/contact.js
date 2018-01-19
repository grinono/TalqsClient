import React, { Component } from 'react'
import '../style/font-awesome.min.css'

export default class faq extends Component {
  constructor(props) {
    super(props)
  }
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
              <h2 className="section-title text-uppercase">Vertel</h2>
              <p className="section-sub">Voel je vrij om contact op te nemen<br/><br/><br/><br/><br/><br/></p>
            </div>
            

            <div className="row">
         

            <div className="col-md-7 text-right">
               <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55551.64596497729!2d4.8804040509687425!3d52.344281110683795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47c60a04852a83e5%3A0xb4f380a1db43289a!2sStrawinskylaan+1%2C+1077+XW+Amsterdam!3m2!1d52.3402597!2d4.8739723999999995!5e0!3m2!1snl!2snl!4v1496990566273" width={500} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
            </div>
         
              <div className="col-md-5">
                <address>
                    <div className="row">
                      <div className="col-md-2" >
                      <i className="fa fa-building-o fa-3x" style={{marginRight:20}} aria-hidden="true"></i>
                      </div>

                      <div className="col-md-6 Address">
                        Bitler b.v.<br />WTC, Amsterdam<br />Strawinskylaan 1, 1077 XW Amsterdam<br />Netherlands
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2" >
                        <i className="fa fa-info-circle fa-3x" style={{marginRight:20}} aria-hidden="true"></i>
                        </div>
                        <div className="col-md-6 CompanyDetails">
                           BTW-nummer: NL140619562B01 <br />
                            Handelsregisternummer(KVK): 20091741 <br />
                           IBAN: NL21 ABNA 0532 4840 10
                            <hr />
                        </div>
                    </div>
                  <div className="row">
                    <div className="col-md-2" >
                    <i className="fa fa-phone fa-3x" style={{marginRight:20}} aria-hidden="true"></i>
                    </div>

                    <div className="col-md-6 Contact">
                        Email : <a href="mailto:vraag@bitler.co">vraag@bitler.co</a><br />
                         Tel : +31651758112
                    </div>
                  </div>
                </address>
              </div>{/* /.col-md-4 */}
            </div>{/* /.row */}
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
