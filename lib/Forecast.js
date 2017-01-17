import React from 'react'
import DayCard from './DayCard'

const Forecast = (props) => (
  <div className="forcast">
    { props.data.list.map(day => (
      <DayCard day={day} />
    ))
    }
  </div>
)

export default Forecast
