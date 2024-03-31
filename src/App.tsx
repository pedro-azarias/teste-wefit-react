import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/routes'
import { GlobalStyle } from './styles/GlobalStyles'
import { StyleSheetManager } from 'styled-components'

const App: React.FC = () => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'itemCount'}>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </StyleSheetManager>
  )
}

export default App
