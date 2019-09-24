import React, { Component } from 'react'
import { SemanticToastContainer } from 'react-semantic-toasts'
import { createMuiTheme } from '@material-ui/core/styles'

import 'react-semantic-toasts/styles/react-semantic-alert.css'

import { ThemeProvider } from '@material-ui/styles'
import View from './components/Views'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <View {...this.props} />
        </ThemeProvider>
        <SemanticToastContainer />
      </div>
    )
  }
}

export default App
