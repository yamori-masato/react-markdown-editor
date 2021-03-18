import React, { FC } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  margin: 3rem 0;
`

const StyledPagingButton = styled.button<{disabled: boolean}>`
  background: none;
  border: none;
  display: inline-block;
  height: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`

interface Props {
  page: number
  maxPage: number
  onPrevClick?: () => void
  onNextClick?: () => void
}

const Paging: FC<Props> = (props) => (
  <StyledContainer>
    <StyledPagingButton
      onClick={props.onPrevClick}
      disabled={!props.onPrevClick}
    >
      ＜
    </StyledPagingButton>
    {props.page} / {props.maxPage}
    <StyledPagingButton
      onClick={props.onNextClick}
      disabled={!props.onNextClick}
    >
      ＞
    </StyledPagingButton>
  </StyledContainer>
)

export default Paging
