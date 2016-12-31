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

      <div className="app">
        <section className="header">
          <h1 className="welcome">Welcome to { String.fromCharCode(0xD83D, 0xDD25) } Lit Weather!</h1>
          <div className= "city"> { this.state.data.city.name }</div>
        </section>
        <div className="forcast">
          { this.state.data.list.map((day) => {
              return (
                <div className = 'day'>
                <h4>{ moment.unix(day.dt).format("MMM Do YY h:mma") }</h4>
                <p>Low: { Math.round(day.main.temp_min) } &deg;F</p>
                <p>High: { Math.round(day.main.temp_max) } &deg;F</p>
                <p>Humidity: { day.main.humidity } %</p>
                <p>Description: { day.weather[0].description } </p>
              </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
