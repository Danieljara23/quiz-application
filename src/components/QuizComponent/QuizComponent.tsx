import { useState } from "react";
import AnswerOption from "./components/AnswerOption";
import Question from "./components/Question";
import QuestionCount from "./components/QuestionCount";
import FinalResult from "./components/FinalResult";
import { css } from "@emotion/core";


const quizContainerCss = css`
  height: 100vh;
  padding-bottom: 0;
  background: linear-gradient(0deg, rgba(56,80,235, 0.96), rgba(93,26,210, 0.93));
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.3fr;
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

const controlsCss = css`
  display: flex;
  justify-content: space-evenly;

  & div { 
    background-color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: #4D0484;
  }
`;

const arrowCss = css`
  content: "";
  background-image: url("data:image/svg+xml,<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-arrow-right' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z'/><path fill-rule='evenodd' d='M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z'/></svg>");
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
  background-position: center;
`;

const pauseCss = css`
  display: inline-block;
  content: "";
  background-image: url("data:image/svg+xml,<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pause' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z'/></svg>");
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
  background-position: center;
`;


function QuizComponent(props){
  const {counter, total, questionTitle, answers, onAnswerSelected, onNextQuestion, setUserAnswers } = props;
  const [showCorrect, setShowCorrect] = useState(null);
  const [showFinalResult, setShowFinalResult] = useState(false);


  function handleNextQuestion(){
    setShowCorrect(null);
    if(counter + 1 === total){
      setShowFinalResult(true);
    }else{
      onNextQuestion();
    }
  }

  return (
    <div css={quizContainerCss}>
      {
      !showFinalResult ? (
      <>
        <Question
          counter={counter}
          total={total}
          questionTitle={questionTitle}
        />
        <div css={answerListContainerCss}>
          <p css={labelCss}>Selecciona la respuesta correcta:</p>
          <ul css={answerListCss}>
            {
              answers.map((item, index) =>{
                let type;
                if(showCorrect === item.id && item.isCorrect || showCorrect && item.isCorrect){
                  type = "correct";
                }else if(showCorrect === item.id && !item.isCorrect){
                  type = "wrong";
                }else{
                  type = "default";
                }

                const contentLengthType = item.description.length > 39 ? 'large': 'default';
                console.log(contentLengthType);

                return(
                  <AnswerOption
                    id={item.id}
                    answerContent={item.description}
                    key={item.content}
                    isCorrect={item.isCorrect}
                    onAnswerSelected={onAnswerSelected}
                    index={index}
                    showCorrect={showCorrect}
                    setShowCorrect={setShowCorrect}
                    type={type}
                    contentLengthType={contentLengthType}
                    setUserAnswers={setUserAnswers}
                  />
                )
              })
            }
          </ul>

        </div>
      </>
      ):(
        <FinalResult/>
      )

      }
      <div css={controlsCss}>
        {/* <div css={arrowCss}></div> */}
        <div css={arrowCss} onClick={handleNextQuestion}></div>
      </div>
    </div>
  )
}

export default QuizComponent;