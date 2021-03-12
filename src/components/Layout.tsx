import React, { FC } from 'react'
import styled from 'styled-components'
import Header from './Header'

const StyledWrapper = styled.div`
  min-height: 100vh;
`

const StyledContainer = styled.div`
  padding-top: 56px;
  height: 100vh;
`

const Layout: FC = ({children}) => {
  return (
    <>
      <Header />
      <StyledWrapper>
        <StyledContainer>
          {children}
        </StyledContainer>
      </StyledWrapper>
    </>
  )
}

export default Layout
