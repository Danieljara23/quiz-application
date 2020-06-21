import {QuestionnaireCardProps} from "./types";
import {css} from "@emotion/core";

const containerCss = css`
  width: 90%;
  border-radius: 11px;
  box-shadow: 0 3px 6px rgba(0,0,0, 0.16);
  background-color: #6565ce;
  padding: 15px;
  display: flex;
  justify-content: start;
  align-items: end;
  margin-bottom: 15px;
  margin: 10px auto;
`;

const titleCss = css`
  color: white;
  font-size: 20px;
`;

function QuestionnaireCard({questionnaireTitle}:QuestionnaireCardProps){
  return(
    <div css={containerCss}>
      <h4 css={titleCss}>{questionnaireTitle}</h4>
    </div>
  )
}

export default QuestionnaireCard;