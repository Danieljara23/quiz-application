import { css } from "@emotion/core";

const counterContainerCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const counterCss = css`
  color: white;
  font-size: 12px;
`;

interface QuestionCount {
  counter: number
  total: number
}

function QuestionCount({counter, total}:QuestionCount){
  return(
    <div css={counterContainerCss}>
      <p css={counterCss}>{`${counter} de ${total}`}</p>
    </div>
  )
}

export default QuestionCount
