import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import {
  getMemos,
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

const Memo = (props: {title: string, text: string}) => {
  return (
    <StyledCard>
      <StyledCardTitle>{props.title}</StyledCardTitle>
      <StyledCardText>{props.text}</StyledCardText>
    </StyledCard>
  )
}

const History = () => {
  const [memos, setMemos] = useState<MemoRecord[]>([])
  useEffect(() => {
    getMemos()
      .then(data => {setMemos(data)})
  }, [])

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
            />
          ))}
        </StyledContainer>
      </Main>
    </>
  )
}

export default History
