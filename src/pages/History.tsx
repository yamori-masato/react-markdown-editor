import React, { FC, useEffect, useState } from 'react'
import { useGlobalState } from '../hooks/useGlobalState'
import { actions } from '../reducers'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import {
  getMemosByPage,
  getMemoPageCount,
  MemoRecord,
} from '../indexeddb/memos'

const StyledContainer = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 90%;
`

const StyledCard = styled.button`
  display: block;
  background-color: white;
  border: solid 1px gray;
  width: 100%;
  height: 8rem;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  line-height: 1.6;
  cursor: pointer;
`

const StyledCardTitle = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`

const StyledCardText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

interface MemoProps {
  title: string
  text: string
  onClick: () => void
}

const Memo: FC<MemoProps> = (props) => {
  return (
    <StyledCard onClick={props.onClick}>
      <StyledCardTitle>{props.title}</StyledCardTitle>
      <StyledCardText>{props.text}</StyledCardText>
    </StyledCard>
  )
}

const History = () => {
  const initialState = {
    page: 1,
    memos: [] as MemoRecord[]
  }
  const [globalState, dispatch] = useGlobalState()
  const [state, setState] = useState(initialState)
  const history = useHistory()

  useEffect(() => {
    getMemosByPage(state.page)
      .then(data => {
        const memos = { memos: data }
        setState({...state, ...memos})
      })
  }, [state.page])

  return (
    <>
      <Header>
        <Link to="/editor">エディタへ戻る</Link>
      </Header>
      <Main>
        <StyledContainer>
          {state.memos.map(memo => (
            <Memo
              key={memo.datetime}
              title={memo.title}
              text={memo.text}
              onClick={() => {
                dispatch(actions.setTextAction(memo.text))
                history.push('/editor')
              }}
            />
          ))}
        </StyledContainer>
      </Main>
    </>
  )
}

export default History
