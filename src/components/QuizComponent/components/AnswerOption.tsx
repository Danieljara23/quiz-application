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

const TYPE_COLORS = {
  correct: "#38b16c",
  wrong: "#ca6666",
  default: "#7075d8"
};

const TYPE_BORDER_RADIUS = {
  large: "20px",
  default: "33px"
}

const TYPE_HEIGHT = {
  large: "80px",
  default: "40px"
}

const AnswerListItem = styled.li`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.16);
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  ${({ type, contentLengthType }) => css`
    background-color: ${TYPE_COLORS[type]};
    border: 1px solid ${TYPE_COLORS[type]};
    height: ${TYPE_HEIGHT[contentLengthType]};
    border-radius: ${TYPE_BORDER_RADIUS[contentLengthType]};
  `}
`;

interface AnswerOption {
  id: string
  isCorrect: boolean
  answerContent: string
  onAnswerSelected: (e:any, isCorrect:boolean) => {}
  index: number
  showCorrect: boolean
  setShowCorrect: any
  type: string
  contentLengthType: string
  setUserAnswers: (userAnswer:boolean) => {}
}



function AnswerOption({id, isCorrect, answerContent, onAnswerSelected, index, showCorrect, setShowCorrect, type, contentLengthType, setUserAnswers}:AnswerOption){

  function handleClick(){
    console.log(isCorrect)
    setUserAnswers(isCorrect)
    setShowCorrect(id)
  }

  return(
    <AnswerListItem onClick={handleClick} type={type} contentLengthType={contentLengthType}>
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