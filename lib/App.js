import React from 'react'
import data from '../public/data'
import Forecast from './Forecast'
import Debug from './Debug'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { data }
  }

  render() {
    return (
      <div className="app">
        <section className="header">
          <h1 className="welcome">Welcome to { String.fromCharCode(0xD83D, 0xDD25) } Lit Weather!</h1>
          <div className= "city"> { this.state.data.city.name }</div>
        </section>
        <Forecast data={this.state.data} />
      </div>

    )
  }
}
