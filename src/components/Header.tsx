import React from 'react'
import { useGlobalState } from '../hooks/useGlobalState'
import { putMemo } from '../indexeddb/memos'
import styled from 'styled-components'
import Button from './Button'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 100%;
  padding: 0 25px;
  font-size: 1.5rem;
  position: fixed;
  z-index: 1;
`

const Header = () => {
  const [state, dispatch] = useGlobalState()
  const saveMemo = (): void => {
    putMemo('TITLE', state.text)
  }

  return (
    <StyledHeader>
      <p>Markdown Editor</p>
      <Button onClick={saveMemo}>保存する</Button>
    </StyledHeader>
  )
}

export default Header
