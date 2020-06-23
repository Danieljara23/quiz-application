import {QuestionnaireCardProps} from "./types";
import {css} from "@emotion/core";
import styled from "@emotion/styled";

const dinamicCss = (props:any) => css`
  width: 90%;
  border-radius: 11px;
  box-shadow: 0 3px 6px rgba(0,0,0, 0.16);
  padding: 15px;
  display: flex;
  justify-content: start;
  align-items: end;
  margin-bottom: 15px;
  margin: 10px auto;
  background: url(${props.imageUrl}) no-repeat;
  background-size:cover;
`;

const titleCss = css`
  color: white;
  font-size: 20px;
`;
// background-color: #6565ce;

const Container  = styled.div`
  ${dinamicCss};
`;

function QuestionnaireCard({questionnaireTitle, imageUrl}:QuestionnaireCardProps){
  return(
    <Container imageUrl={imageUrl}>
      <h4 css={titleCss}>{questionnaireTitle}</h4>
    </Container>
  )
}

export default QuestionnaireCard;