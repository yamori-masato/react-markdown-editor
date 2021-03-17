import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Main from '../components/Main'

const History = () => {
  return (
    <>
      <Header>
        <Link to="/editor">エディタへ戻る</Link>
      </Header>
      <Main>

      </Main>
    </>
  )
}

export default History
