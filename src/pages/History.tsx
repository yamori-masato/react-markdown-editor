import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import Main from '../components/Main'

const History = () => {
  const history = useHistory()
  return (
    <>
      <Header>
        <Button onClick={() => history.push('/editor')}>
          エディタへ戻る
        </Button>
      </Header>
      <Main>

      </Main>
    </>
  )
}

export default History
