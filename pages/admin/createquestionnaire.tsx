import { css } from '@emotion/core';
import useCreateQuestionnaire from '../../src/hooks/useCreateQuestionnaire';
import QuestionsManager from '../../src/components/QuestionsManager';
import Layout from '../../src/components/Layout';

const containerCss = css`
  width: 100%;
`;

const createManagerCss = css`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
  max-width: 720px;
`;

const createManagerTitleAndDescriptionCss = css`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 15px 30px 10px 15px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  border-top: 5px solid #2b6c92;
  margin-bottom: 20px;
`;

const createManagerInputsCss = css`
  border: none;
  border-bottom: 1px solid #cccccc;
  padding: 8px;
  margin-bottom: 10px;
  transition: all 0.2s ease-in;

  &::placeholder {
    color: #3a3a3a;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-bottom-color: #2b6c92;
  }
`;

const titleCss = css`
  font-size: 22px;
`;

const descriptionCss = css`
  font-size: 14px;
  padding-left: 8px;
`;

function CreateQuestionnaire() {
  const {
    questionnaireState,
    addQuestion,
    removeQuestion,
    addOption,
    changeMainInfo,
    changeQuestion,
    changeOption,
    enableEditionInQuestion,
    removeQuestionOption,
    createQuestionnaire,
  } = useCreateQuestionnaire();

  function handleCreateClick() {
    createQuestionnaire();
  }

  return (
    <Layout css={containerCss} title="Crear cuestionario">
      <div css={createManagerCss}>
        <div css={createManagerTitleAndDescriptionCss}>
          <input
            css={[createManagerInputsCss, titleCss]}
            name="questionnaireTitle"
            type="text"
            value={questionnaireState.questionnaireTitle}
            onChange={(e) => changeMainInfo(e.target.name, e.target.value)}
          />
          <input
            css={[createManagerInputsCss, descriptionCss]}
            name="description"
            type="text"
            value={questionnaireState.description}
            onChange={(e) => changeMainInfo(e.target.name, e.target.value)}
            placeholder="Descripción del cuestionario"
          />
          <input
            css={[createManagerInputsCss, descriptionCss]}
            type="text"
            name="imageUrl"
            value={questionnaireState.imageUrl}
            onChange={(e) => changeMainInfo(e.target.name, e.target.value)}
            placeholder="Url de la imagen del cuestionario"
          />
        </div>
        <QuestionsManager
          questions={questionnaireState.questions}
          changeQuestion={changeQuestion}
          addQuestion={addQuestion}
          changeOption={changeOption}
          addOption={addOption}
          enableEditionInQuestion={enableEditionInQuestion}
          removeQuestionOption={removeQuestionOption}
          removeQuestion={removeQuestion}
          handleCreateClick={handleCreateClick}
        />
      </div>
    </Layout>
  );
}

export default CreateQuestionnaire;
