import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Welcome to Lit Weather!</h1>
        <h1>{String.fromCharCode(0xD83D, 0xDD25)}</h1>
        <h1>Okayokay</h1>
      </div>
    )
  }
}
