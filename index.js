import React from 'react'
import { render } from 'react-dom'

var div = React.DOM.div
var h1 = React.DOM.h1

const LitComponent = () => {
  return (
    <div>
      <h1>Welcome to Lit Weather!</h1>
      <h1>{String.fromCharCode(0xD83D, 0xDD25)}</h1>
    </div>
  )}

render(<LitComponent />, document.getElementById('app'))
