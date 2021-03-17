import React, { useState, FC } from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledWrapper = styled.div`
  align-items: center;
  background-color: #0002;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

const StyledModal = styled.div`
  background: #fff;
  padding: 1rem;
  width: 32rem;
`

const StyledTitleInput = styled.input`
  width: 29rem;
  padding: 0.5rem;
`

const StyledControl = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`

interface Props {
  onSave: (title: string) => void
  onCancel: () => void
}

const SaveModal: React.FC<Props> = props => {
  const { onCancel, onSave } = props
  const [title, setTitle] = useState(new Date().toISOString())

  return (
    <StyledWrapper>
      <StyledModal>
        <p>テキストの内容を保存します。</p>
        <p>保存内容のタイトルを入力して「保存」ボタンを押してください。</p>
        <p>
          <StyledTitleInput
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </p>
        <StyledControl>
          <Button onClick={onCancel} cancel>
            キャンセル
          </Button>
          <Button onClick={() => onSave(title)}>
            保存
          </Button>
        </StyledControl>
      </StyledModal>
    </StyledWrapper>
  )
}

export default SaveModal
