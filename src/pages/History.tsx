import React, { FC, useEffect, useState } from 'react'
import { useGlobalState } from '../hooks/useGlobalState'
import { actions } from '../reducers'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Paging from '../components/Paging'
import {
  getMemosByPage,
  getMemoPageCount,
  MemoRecord,
} from '../indexeddb/memos'

const StyledContainer = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 90%;
  overflow: hidden;
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
  const [globalState, dispatch] = useGlobalState()
  const [maxPage, setMaxPage] = useState<number>(1)
  const [page, setPage] = useState<number>(1)
  const [memos, setMemos] = useState<MemoRecord[]>([])

  const history = useHistory()

  useEffect(() => {
    getMemoPageCount()
      .then(setMaxPage)
  }, [])

  useEffect(() => {
    getMemosByPage(page)
      .then(setMemos)
  }, [page])

  const onPrevClick = (page-1 >= 1) 
    ? () => setPage(page - 1)
    : undefined
  
  const onNextClick = (page+1 <= maxPage) 
    ? () => setPage(page + 1)
    : undefined
  
  console.log({onPrevClick, onNextClick})

  return (
    <>
      <Header>
        <Link to="/editor">エディタへ戻る</Link>
      </Header>
      <Main>
        <StyledContainer>
          {memos.map(memo => (
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
          <Paging
            page={page}
            maxPage={maxPage}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
          />
        </StyledContainer>
      </Main>
    </>
  )
}

export default History
