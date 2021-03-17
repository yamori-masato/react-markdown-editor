import React from 'react'
import ReactMarkdown from 'react-markdown'
import { putMemo } from '../indexeddb/memos'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Button from '../components/Button'
import SaveModal from '../components/SaveModal'
import { useGlobalState } from '../hooks/useGlobalState'
import { actions } from '../reducers'
import { Link } from 'react-router-dom'

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
`

const StyledTextArea = styled.textarea`
  flex: 1;
  height: 100%;
  border-right: 1px solid silver;
  border-top: 1px solid silver;
`

const StyledPreview = styled.div`
  flex: 1;
  height: 100%;
  border-top: 1px solid silver;
`

const Editor = () => {
  const [state, dispatch] = useGlobalState()

  return (
    <>
      <Header>
        <Button onClick={() => dispatch(actions.openModalAction())}>保存する</Button>
        <Link to="/history">履歴を見る</Link>
      </Header>

      <Main>
        <StyledContainer>
          <StyledTextArea
            onChange={e => dispatch(actions.setTextAction(e.target.value))}
            value={state.text}
            placeholder="テキスト入力エリア"
          />
          <StyledPreview>
            <ReactMarkdown source={state.text} />
          </StyledPreview>
        </StyledContainer>
        {state.isModalOpen && (
          <SaveModal
            onSave={(title: string): void => {
              putMemo(title, state.text)
              dispatch(actions.closeModalAction())
            }}
            onCancel={() => {dispatch(actions.closeModalAction())}}
          />
        )}
      </Main>
    </>
  )
}

export default Editor
