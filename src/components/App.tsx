import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { GlobalProvider } from '../contexts'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import {
  Editor,
  History
} from '../pages'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <GlobalProvider>
          <Switch>
            <Route exact path="/editor" component={Editor} />
            <Route exact path="/history" component={History} />
            <Redirect path="*" to="/editor" />
          </Switch>
        </GlobalProvider>
      </Router>
    </>
  )
}

export default App
