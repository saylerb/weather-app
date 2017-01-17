import React from 'react'
import moment from 'moment'

//const React = require('react')
//const moment = require('moment')

const DayCard = ({day}) => {
  return (
    <div className = 'day'>
      <h4>{ moment.unix(day.dt).format("MMM Do YY h:mma") }</h4>
      <p>Low: { Math.round(day.main.temp_min) } &deg;F</p>
      <p>High: { Math.round(day.main.temp_max) } &deg;F</p>
      <p>Humidity: { day.main.humidity } %</p>
      <p>Description: { day.weather[0].description } </p>
    </div>
  )
}

export default DayCard
