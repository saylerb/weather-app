const React = require('react')
const DayCard = require('./DayCard')
const Debug = require('./Debug')

const Forecast = (props) => (
  <div className="forcast">
    { props.data.list.map(day => (
      <DayCard day={day} />
    ))
    }
  </div>
)

module.exports = Forecast
