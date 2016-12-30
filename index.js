var React = require('react')
var ReactDOM = require('react-dom')

var div = React.DOM.div
var h1 = React.DOM.h1

var LitComponent = React.createClass({
  render: function () {
    return (
      div(null,
        h1(null, "Welcome to Lit Weather!"),
        h1(null, String.fromCharCode(0xD83D, 0xDD25))
      )
    )
  }
})

ReactDOM.render(React.createElement(LitComponent), document.getElementById('app'))
