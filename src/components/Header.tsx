import React, { FC } from 'react'
import { Link } from 'react-router-dom'
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
  position: fixed;
  z-index: 1;
  background-color: white;
  border-bottom: solid 1px gray;
`

const StyledHeaderTitle = styled.header`
  font-size: 1.5rem;
`

const StyledHeaderItems = styled.div`
  display: flex;
  align-items: center;

  & > *{
    margin-left: 0.5rem;
  }
`

const Header: FC = ({children}) => {
  const [state, dispatch] = useGlobalState()

  return (
    <StyledHeader>
      <StyledHeaderTitle>Markdown Editor</StyledHeaderTitle>
      <StyledHeaderItems>
        {children}
      </StyledHeaderItems>
    </StyledHeader>
  )
}

export default Header
