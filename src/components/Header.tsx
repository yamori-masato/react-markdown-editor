import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 56px;
  line-height: 56px;
  width: 100%;
  padding: 0 25px;
  font-size: 1.5rem;
  position: fixed;
  z-index: 1;
`

const Header = () => {
  return (
    <StyledHeader>
      <p>Markdown Editor</p>
    </StyledHeader>
  )
}

export default Header
