import React from 'react'
import moment from 'moment'

const DayCard = ({day}) => {
  let iconURL = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`


  return (
    <div className = 'day'>
      <h4>{ moment.unix(day.dt).format("MMM Do YY h:mma") }</h4>
      <p>Low: { Math.round(day.main.temp_min) } &deg;F</p>
      <p>High: { Math.round(day.main.temp_max) } &deg;F</p>
      <p>Humidity: { day.main.humidity } %</p>
      <p>Description: { day.weather[0].description } </p>
      <img src={iconURL}></img>
    </div>
  )
}

export default DayCard