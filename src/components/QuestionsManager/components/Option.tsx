import { css } from "@emotion/core";
import SvgIcon from "../../../components/SvgIcon";

interface OptionProps {
  enableEdition: boolean
  questionIdx: number
  index: number
  description: string,
  isCorrect: boolean,
  changeOption: (name, value, questionId, optionId) => any
  removeQuestionOption: (optionId, questionId) => any
}

const optionContainerCss = css`
  display: grid;
  grid-template-columns: 20px auto 16px;
  align-items: center;
`;

const optionInputCss = css`
  border: none;
  border-bottom: 1px solid transparent;
  padding: 8px;
  margin: 5px 15px;
  font-size: 12px;

  &:hover {
    border-bottom: 1px solid #cccccc;
  }

  &::placeholder {
    color: #3A3A3A;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-bottom-color: #2b6c92;
  }
`;

const descriptionCss = css`
  padding: 8px;
  margin: 5px 0;
  font-size: 12px;
`;

const circleCss = css`
  width: 20px;
  height: 20px;
  border: 1px solid #e8e0e0;
  border-radius: 20px;
  margin-right: 5px;
`;

function Option({ enableEdition, questionIdx, index, description, isCorrect, changeOption, removeQuestionOption }: OptionProps){
  return(
    <div css={optionContainerCss}>
      <div css={circleCss}/>
      {
        enableEdition ? (
          <input css={optionInputCss}
            name="description"
            type="text"
            value={description}
            onChange={(e)=>changeOption(e.target.name, e.target.value, questionIdx, index)}
          />
        ):(
          <p css={descriptionCss}>{description}</p>
        )
      }
      {enableEdition && <div onClick={() => removeQuestionOption(index, questionIdx)}><SvgIcon  iconName="close" width="16px" height="16px" alt="Replay"/></div>}
  
    </div>
  )
}

export default Option