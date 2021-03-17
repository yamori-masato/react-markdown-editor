import React from 'react'
import { useGlobalState } from '../hooks/useGlobalState'
import { actions } from '../reducers'
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

  return (
    <StyledHeader>
      <p>Markdown Editor</p>
      <Button onClick={() => dispatch(actions.openModalAction())}>保存する</Button>
    </StyledHeader>
  )
}

export default Header
