import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SaveModal from '../components/SaveModal'
import { useGlobalState } from '../hooks/useGlobalState'
import { actions } from '../reducers'

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
    <Layout>
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
          onSave={() => {}}
          onCancel={() => {}}
        />
      )}
    </Layout>
  )
}

export default Editor
