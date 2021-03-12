import React from 'react'
import Editor from '../pages/Editor'
import { createGlobalStyle } from 'styled-components'

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
      <Editor />
    </>
  )
}

export default App
