import { css } from "@emotion/core";

const questionContainerCss = css`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  padding: 20px;
  position: relative;
  margin: 22px;

  &:after{
    content: "";
    position: absolute;
    height: 4px;
    width: 250px;
    background: linear-gradient(90deg,#EFE66A,#D51919);
    bottom: 0;
    left: calc(50% - 125px);
  }
`;

const counterCss = css`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 16px;
  color: #3A3A3A;
`;

const questionCss = css`
  color: #3A3A3A;
  font-size: 20px;
  align-self: center;
`;

interface Question {
  questionTitle: string
  counter: number
  total: number
}

function Question({questionTitle, counter, total }:Question){
  return(
    <div css={questionContainerCss}>
      <span css={counterCss}>{`${counter + 1}/${total}`}</span>
      <h2 css={questionCss}>{questionTitle}</h2>
    </div>
  )
}

export default Question;