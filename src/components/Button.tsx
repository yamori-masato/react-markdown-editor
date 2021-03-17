import React, { FC } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button<{cancel: boolean}>`
  box-shadow: none;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;
  cursor: pointer;

  ${props => props.cancel ? css`
    color: gray;
    background-color: white;
    border: solid 1px gray; 
  ` : css`
    color: white;
    background-color: dodgerblue;
    border: none;
  `}
`

interface Props {
  children: string
  cancel?: boolean
  onClick: () => void
}

const Button: FC<Props> = (props) => {
  return (
    <StyledButton onClick={props.onClick} cancel={!!props.cancel}>
      {props.children}
    </StyledButton>
  )
}

export default Button
