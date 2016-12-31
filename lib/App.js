import React from 'react'
import data from '../public/data'
import moment from 'moment'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { data }
  }

  render() {
    return (
      <div>
        <h1>Welcome to Lit Weather!</h1>
        <h1>{ String.fromCharCode(0xD83D, 0xDD25) }</h1>
        <h1>City: { this.state.data.city.name }</h1>
        <h2>{ moment.unix(this.state.data.list[0].dt).format("MMM Do YY") }</h2>

        <h2>Low: { Math.round(this.state.data.list[0].main.temp_min) } &deg;F</h2>
        <h2>High: { Math.round(this.state.data.list[0].main.temp_max) } &deg;F</h2>
        <h2>Humidity: { this.state.data.list[0].main.humidity } %</h2>
        <h2>Description: { this.state.data.list[0].weather[0].description } </h2>
      </div>
    )
  }
}
