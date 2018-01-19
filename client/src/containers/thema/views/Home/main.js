import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'

// import Widget02 from '../Widgets/Widget02'
import './styles.css'
import CompanyData from './companyData'
import Coin from './coin'

export default class Home extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        <div className="container-fluid">
            <div className="row">
              <div className="col-4 scrollit">
                <Coin />
              </div>
              <div className="col-8 fixed">
                  <CompanyData />
              </div>

            </div>
        </div>
      </div>
    )
  }
}
