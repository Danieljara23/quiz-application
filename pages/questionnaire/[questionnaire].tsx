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
  const { quizState: { questionnaireTitle, imageUrl, description, questions, counter, total, userAnswers,  loading, error} , setUserAnswers,  setNextQuestion} = useQuizManager({id});
  if(loading) return <p>Loading</p>;
  if(error) return <p>Ups, ha ocurrido un error</p>;
  console.log(userAnswers);
  
  function handleClick(){
    console.log("Clicked!");
    setOpenQuiz(true);
  }

  // 1px solid #38b16c
  // #ca6666 -red
  function handleSelectedQuestion(event, isCorrect){
    console.log(event.target)
    event.stopPropagation();
    if(document && event.target){
      const parentClass = event.target.parentElement.getAttribute('class');
      const answerList = document.querySelectorAll(`.${parentClass}`);
      answerList.forEach((listItem:any) => {
        console.log(listItem)
        if(listItem.getAttribute('data-correct') === "true"){
          listItem.style['border'] = '1px solid #38b16c';
          listItem.style['background-color'] = '#38b16c';
        }
      })
      if(event.target.parentElement.getAttribute('data-correct') === "false"){
        event.target.parentElement.style['border'] = '1px solid #ca6666';
        event.target.parentElement.style['background-color'] = '#ca6666';
      }
      console.log(answerList)
    }
    console.log(isCorrect)
    // console.log("Hello")
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
          onAnswerSelected={handleSelectedQuestion}
          onNextQuestion={setNextQuestion}
          setUserAnswers={setUserAnswers}
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