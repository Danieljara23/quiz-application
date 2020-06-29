import AnswerOption from "./components/AnswerOption";
import Question from "./components/Question";
import QuestionCount from "./components/QuestionCount";
import { css } from "@emotion/core";

const quizContainerCss = css`
  height: 100vh;
  padding-bottom: 0;
  background: linear-gradient(0deg, rgba(56,80,235, 0.96), rgba(93,26,210, 0.93));
  display: grid;
  grid-template-rows: 0.5fr 1fr;
`;

const answerListContainerCss = css`
  list-style: none;
  padding: 25px;
`;

const labelCss = css`
  color: white;
  font-size: 16px;
  text-align: center;
  margin-top: 0;
`;
  
const answerListCss = css`
  padding: 0;
  margin: 0;
`;


function QuizComponent(props){
  const {counter, total, questionTitle, answers, onAnswerSelected } = props;

  function renderAnswers(item, index){
    return(
      <AnswerOption
        id={item.id}
        answerContent={item.description}
        key={item.content}
        isCorrect={item.isCorrect}
        onAnswerSelected={onAnswerSelected}
        index={index}
      />
    )
  }

  return (
    <div css={quizContainerCss}>
      {/* <QuestionCount
        counter={counter}
        total={total}
      /> */}
      <Question
        counter={counter}
        total={total}
        questionTitle={questionTitle}
      />
      <div css={answerListContainerCss}>
        <p css={labelCss}>Selecciona la respuesta correcta:</p>
        <ul css={answerListCss}>
          { answers?.map(renderAnswers) }
        </ul>

      </div>
    </div>
  )
}

export default QuizComponent;