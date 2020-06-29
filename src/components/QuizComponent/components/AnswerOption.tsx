import { css } from "@emotion/core";
import addLetterPrefix from "../../../../utils/add-prefix";

const answerListItem = css`
  background-color: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.16);
  border: 1px solid white;
  height: 40px;
  border-radius: 33px;
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  padding: 5px 15px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const customRadioButtonCss = css`
  position: absolute;
  width: auto;
  opacity: 0;
`;

const labelCss = css`
  color: #3A3A3A;
  width: 100%;
  font-weight: 700;
`;

interface AnswerOption {
  id: string
  isCorrect: boolean
  answerContent: string
  onAnswerSelected: (isCorrect:boolean) => {}
  index: number
}

function AnswerOption({id, isCorrect, answerContent, onAnswerSelected, index}:AnswerOption){
  return(
    <li css={answerListItem} onClick={()=>onAnswerSelected(isCorrect)}>
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
    </li>
  )

}

export default AnswerOption;