import { css } from "@emotion/core";
import styled from '@emotion/styled'
import addLetterPrefix from "../../../../utils/add-prefix";
import { useState } from "react";

// const answerListItem = css`
//   background-color: #7075d8;
//   box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.16);
//   border: 1px solid #7075d8;
//   height: 40px;
//   border-radius: 33px;
//   margin: 0;
//   margin-bottom: 20px;
//   font-size: 16px;
//   display: flex;
// `;

const customRadioButtonCss = css`
  position: absolute;
  width: auto;
  opacity: 0;
`;

const labelCss = css`
  color: white;
  width: 100%;
  font-weight: 700;
  padding: 5px 15px;
  display: flex;
  justify-content: start;
  align-items: center;
`;


const AnswerListItem = styled.li`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.16);
  height: 40px;
  border-radius: 33px;
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  background-color: #7075d8;
  border: 1px solid #7075d8;
  background-color: ${({selectedByUser, showCorrect, isCorrect}:any) => (selectedByUser === "correct" || (showCorrect && isCorrect)   && '#38b16c')};
  background-color: ${({selectedByUser, showCorrect}:any) => (selectedByUser === "wrong" && showCorrect && '#ca6666')};
  border: ${({selectedByUser, showCorrect, isCorrect}) => (selectedByUser === "correct" || (showCorrect && isCorrect) && '1px solid #38b16c')};
  border: ${({selectedByUser, showCorrect}) => (selectedByUser === "wrong" && showCorrect && '1px solid #ca6666')};
`;

interface AnswerOption {
  id: string
  isCorrect: boolean
  answerContent: string
  onAnswerSelected: (e:any, isCorrect:boolean) => {}
  index: number
  showCorrect: boolean
  setShowCorrect: any
}



function AnswerOption({id, isCorrect, answerContent, onAnswerSelected, index, showCorrect, setShowCorrect}:AnswerOption){
  const [selectedByUser, setSelectedByUser] = useState("");

  function handleClick(){
    console.log(isCorrect)
    setShowCorrect(true)
    if(isCorrect){
      setSelectedByUser("correct");
    }else{
      setSelectedByUser("wrong");
    }
  }
  return(
    <AnswerListItem onClick={handleClick} selectedByUser={selectedByUser} isCorrect={isCorrect} showCorrect={showCorrect}>
      <input
        css={customRadioButtonCss}
        type="radio"
        name="radioGroup"
        id={id}
        value={id}
      />
      <label css={labelCss} htmlFor={`answer-${id}`}>
        {`${addLetterPrefix(index, answerContent)}`}
      </label>
    </AnswerListItem>
  )

}

export default AnswerOption;