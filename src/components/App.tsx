import React from 'react'
import Editor from '../pages/Editor'
import { createGlobalStyle } from 'styled-components'
import { GlobalProvider } from '../contexts'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
`

const App = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Editor />
    </GlobalProvider>
  )
}

export default App
