import {useState} from "react";
import {css} from "@emotion/core";
import QuizComponent from "../../src/components/QuizComponent";
import useQuizManager from "../../src/hooks/useQuizManager";


const containerCss = css`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  width: 100%;
  
  & img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  }
`;
  
const contentCss = css`
  display: flex;
  flex-direction: column;
  align-item: center;
  color: #707070;
  align-items: center;
  padding: 10px;
  
  & p{
    margin: 0;
    margin-bottom: 15px;
  }
`;

const buttonCss = css`
  border-radius: 32px;
  color: #4D0484;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border: none;
  width: 200px;
  height: 40px;
  justify-self: center;
  font-weight: bold;
`;


function Questionnaire({ props }){
  const [openQuiz, setOpenQuiz] = useState(false);
  const  id  = props.questionnaire;
  const { quizState: { questionnaireTitle, imageUrl, description, questions, counter, total, loading, error} , setNextQuestion} = useQuizManager({id});
  if(loading) return <p>Loading</p>;
  if(error) return <p>Ups, ha ocurrido un error</p>;


  function handleClick(){
    console.log("Clicked!");
    setOpenQuiz(true);
  }

  function handleNextQuestion(isCorrect){
    // setNextQuestion();
    console.log(isCorrect)
    console.log("Hello")
  }

console.log("COUNTER:", counter);
  return (
    <div css={containerCss}>
      {
        openQuiz ? (
        <QuizComponent
          counter={counter}
          total={total}
          questionTitle={questions[counter]?.questionTitle}
          answers={questions[counter]?.answers}
          onAnswerSelected={handleNextQuestion}
        /> ):(
          <>
            <img src={imageUrl} alt={questionnaireTitle}/>
            <div css={contentCss}>
              <p>{description}</p>
              <button css={buttonCss} onClick={()=>handleClick()}>Empezar</button>
            </div>
          </>
        )
      }
    </div>
  )
}

Questionnaire.getInitialProps = async ({query}:any) => {
  const questionnaire  = query.questionnaire;
  return { props: { questionnaire }}

}

export default Questionnaire;