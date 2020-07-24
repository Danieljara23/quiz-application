import { css } from "@emotion/core";
import Question from "./components/Question";

interface QuestionsProps {
  questions: Question[]
  changeQuestion: (name,value, index) => any
  addQuestion: () => any
  addOption: (questionId) => any
  changeOption: (name, value, questionId, optionId) => any
  enableEditionInQuestion: (questionId) => any
  removeQuestionOption: (optionId, questionId) => any
}

interface Question {
  questionTitle: string
  enableEdition: boolean
  answers: any
}

const questionsManagerContainerCss = css`
  display: flex;
`;

const questionsWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const addQuestionButtonCss = css`

`;

function QuestionsManager({ questions, changeQuestion, addQuestion, changeOption, addOption, enableEditionInQuestion, removeQuestionOption }:QuestionsProps) {
  return(
    <div css={questionsManagerContainerCss}>
      <div css={questionsWrapperCss}>
        {
          questions.map((question, index) =>{
            return(
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
              />
            )
          })
        }
        <div css={addQuestionButtonCss}>
          <button onClick={addQuestion}>Añadir pregunta</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionsManager;