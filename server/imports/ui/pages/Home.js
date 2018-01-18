import React, { Component } from 'react'
// import Expert from '../components/expertDetails/expertSmall'
// import HomeSearchBar from '../components/search/homeSearchBar'
import RaisedButton from 'material-ui/RaisedButton'
// import Bot from '../components/bot/chatBot'
import Bot from '../components/bot/bot'
import Slack from '../components/slack/slack'
// import TestSub from '../components/bot/testSub'

export default class Home extends Component {
  toIndiv () {
    this.props.history.push('/about/about-us')
  }

  toComp () {
    this.props.history.push('/about/about-us')
  }

  startNow () {
    this.props.history.push('/about/about-us')
  }

  render () {
    // setTimeout(() => {
    //   console.log('publish')
    //   pubsub.publish('messages', { _id: 'ghg', text: 'dag wereld' })
    // }, 3000)
    return (
      <div className='outer'>
        <div className='container'>
          <div className='content box'>
            <div className='container' style={{paddingTop: 0}}>
              <div className='row'>
                <div style={{marginBottom: 30}} className='col-sm-12'>
                  <h1><span>Krijg sneller werk gedaan</span></h1>
                  <h2 style={{marginTop:0}} >jouw uitdaginging gekoppeld aan<br />kennis en skills van experts</h2>
                </div>
              </div>
              <div >
                <Bot />
                {/* <TestSub /> */}
              </div>

              {/* <HomeSearchBar history={this.props.history} /> */}
            </div>
          </div>
        </div>
        <div className='box2'>
          <div className='container'>
            <div className='col-sm-5 noleft'>
              <img src='/images/img1.png' className='img-responsive' />
            </div>
            <div className='col-sm-7 noright'>
              <h1>Bitler</h1>
              <p>Bitler is een kennismarktplaats voor mensen zoals jij en ik. Krijg sneller iets gedaan met betere kwaliteit. Loop jij of je team ergens tegenaan, betrek experts via Bitler! </p>
              <RaisedButton
                onClick={this.toIndiv.bind(this)}
                label='individuen'
                style={{margin: '10px 10px 0px 0px'}}
                buttonStyle={{backgroundColor: '#ff6978'}}
                primary={true}
              />
              <RaisedButton
                onClick={this.toComp.bind(this)}
                label='bedrijven' />
            </div>
          </div>
        </div>
        <div className='box3'>
          <div className='container'>
            <h3>Start een Quest<span><em>Vind een expert</em></span></h3>
            <div className='bottom'>
              <div className='row'>
                <div className='col-sm-4'>
                  <span><img src='/images/icon.png' /></span>
                  <h4>Advies</h4>
                  <p>Ik zoek een expert(s) die me hier advies over kan geven</p>
                </div>
                <div className='col-sm-4'>
                  <span><img src='/images/icon.png' /></span>
                  <h4>Reflectie</h4>
                  <p>Ik nodig uit tot een discussie om zo inzicht te verkrijgen</p>
                </div>
                <div className='col-sm-4'>
                  <span><img src='/images/icon3.png' /></span>
                  <h4>Discussie</h4>
                  <p>Ik heb zelf een aanzet gemaakt, en zoek reflectie / verbetering</p>
                </div>
              </div>
              <div style={{marginTop: '80px'}} className='row'>
                <div className='col-sm-4'>
                  <span><img src='/images/icon.png' /></span>
                  <h4>Probleem</h4>
                  <p> Ik zoek het “echte” probleem, voordat ik op zoek kan naar het antwoord </p>
                </div>
                <div className='col-sm-4'>
                  <span><img src='/images/icon2.png' /></span>
                  <h4>Literatuur</h4>
                  <p>Ik zoek literatuur / ondersteunende documentatie</p>
                </div>
                <div className='col-sm-4'>
                  <span><img src='/images/icon3.png' /></span>
                  <h4>Werk</h4>
                  <p>Vacature / ik zoek iemand voor de uitvoering</p>
                </div>
              </div>
              {/* <div className='line' /> */}
            </div>
          </div>
        </div>
        <div className='box4'>
          <div className='container'>
            <div className='col-sm-6 noleft'>
              <h1>Samen kom je verder.<br />
                <span>Direct in Contact</span> met een community die je verder helpt</h1>
              <RaisedButton onClick={() => this.startNow()} label='begin nu' style={{ margin: '10px 10px 0px 0px' }} buttonStyle={{backgroundColor: '#ff6978'}} primary={true} />
            </div>
            <div className='col-sm-6 noright'>
              <div className='item'>
                <h2>Netwerken</h2>
                <p>Stop met traditioneel netwerken. Krijg toegang tot de juiste personen die tijd voor je willen maken.</p>
              </div>
              <div className='item'>
                <h2>Community</h2>
                <p>Kom in het Bitler netwerk en kom in direct contact met mensen en bedrijven die op zoek zijn naar jouw expertise</p>
              </div>
              <div className='item'>
                <h2>Flexibiliteit</h2>
                <p>Besteed meer tijd aan leuke dingen, op jouw tijd.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='box5'>
          <div className='container'>
            <h3>Als expert<span><em>Help anderen verder komen</em></span></h3>
            <div className='bottom'>
              <div className='row'>
                <div className='col-sm-3'>
                  <span><img src='/images/icon5.png' /></span>
                  <h4>SkillPoints</h4>
                  <p>Verdien SkillPoints en krijg toegang tot de best betaalde Quests</p>
                </div>
                <div className='col-sm-3'>
                  <span><img src='/images/icon6.png' /></span>
                  <h4>Boeiende vragen</h4>
                  <p>Krijg alle boeiende vragen in je vakgebied. Help anderen, om zelf verder te komen</p>
                </div>
                <div className='col-sm-3'>
                  <span><img src='/images/icon7.png' /></span>
                  <h4>Geld</h4>
                  <p>Bepaal zelf of, wanneer en hoeveel je betaald wilt krijgen voor je kennis</p>
                </div>
                <div className='col-sm-3'>
                  <span><img src='/images/icon8.png' /></span>
                  <h4>Profielen</h4>
                  <p>Geen gedoe met profielen, je status is alleen afhankelijk van je contributie in de community. Het zelflerend systeem ondekt waar je goed in bent</p>
                </div>
              </div>
              <div className='line' />
            </div>
          </div>
        </div>
        <Slack />

      </div>
    )
  }
}
