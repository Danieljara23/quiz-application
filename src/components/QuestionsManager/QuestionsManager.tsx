import { css } from '@emotion/core';
import Question from './components/Question';
import Plus from '../../../public/images/icons/plus.svg';

interface QuestionsProps {
  questions: Question[];
  changeQuestion: (name, value, index) => any;
  addQuestion: () => any;
  addOption: (questionId) => any;
  changeOption: (name, value, questionId, optionId) => any;
  enableEditionInQuestion: (questionId) => any;
  removeQuestionOption: (optionId, questionId) => any;
  removeQuestion: (questionId) => any;
  handleCreateClick: () => any;
}

interface Question {
  questionTitle: string;
  enableEdition: boolean;
  answers: any;
}

const questionsManagerContainerCss = css`
  display: flex;
`;

const questionsWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const addQuestionButtonContainerCss = css`
  position: fixed;
  right: 20px;
  top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const addQuestionButtonCss = css`
  background: #2b6c92;
  border-radius: 7px;
  border: 1px solid #2b6c92;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  color: white;
  height: 35px;
  font-size: 16px;
  margin-bottom: 5px;

  & svg {
    fill: white;
    width: 18px;
    height: 18px;

    & path {
      stroke: white;
    }
  }
`;

function QuestionsManager({
  questions,
  changeQuestion,
  addQuestion,
  changeOption,
  addOption,
  enableEditionInQuestion,
  removeQuestionOption,
  removeQuestion,
  handleCreateClick,
}: QuestionsProps): JSX.Element {
  return (
    <div css={questionsManagerContainerCss}>
      <div css={questionsWrapperCss}>
        {questions.map((question, index) => {
          return (
            <>
              <Question
                index={index}
                questionTitle={question.questionTitle}
                enableEdition={question.enableEdition}
                answers={question.answers}
                changeQuestion={changeQuestion}
                addOption={addOption}
                changeOption={changeOption}
                enableEditionInQuestion={enableEditionInQuestion}
                removeQuestionOption={removeQuestionOption}
                removeQuestion={removeQuestion}
              />
              <div css={addQuestionButtonContainerCss}>
                <button css={addQuestionButtonCss} onClick={addQuestion}>
                  <Plus />
                  Añadir pregunta
                </button>
                <button css={addQuestionButtonCss} onClick={handleCreateClick}>
                  <Plus />
                  Guardar Cuestionario
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionsManager;
