import React from 'react'
import {render} from 'react-dom'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const App = () => (
  <div style={styles}>
    Check out the tests! You can run them right here in codesandbox!
  </div>
)

render(<App />, document.getElementById('root'))
