import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Option from './Option';
import SvgIcon from '../../SvgIcon';

interface QuestionProps {
  index: number;
  questionTitle: string;
  enableEdition: boolean;
  answers: Answer[];
  changeQuestion: (name, value, index) => any;
  addOption: (questionId) => any;
  changeOption: (name, value, questionId, optionId) => any;
  enableEditionInQuestion: (questionId) => any;
  removeQuestionOption: (optionId, questionId) => any;
  removeQuestion: (questionId) => any;
}

interface Answer {
  description: string;
  isCorrect: boolean;
}
const QuestionContainerStyled = styled.div`
  border: 1px solid #e8e0e0;
  border-radius: 6px;
  padding: 18px;
  padding-right: 30px;
  position: relative;
  margin-bottom: 10px;
  background: white;

  ${({ enableEdition }) => css`
    border-left: ${enableEdition ? '5px solid #2b6c92' : '1px solid #e8e0e0'};
    box-shadow: ${enableEdition
      ? '0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24)'
      : 'none'};
  `}
`;

const questionInputCss = css`
  border: none;
  border-bottom: 1px solid transparent;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 15px;
  width: 100%;

  &:hover {
    border-bottom: 1px solid #cccccc;
  }

  &::placeholder {
    color: #3a3a3a;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-bottom-color: #2b6c92;
  }
`;

const questionTitleCss = css`
  padding: 8px;
  margin: 0;
  font-size: 15px;
`;

const answersContainerCss = css`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const addOptionCss = css`
  display: flex;
  align-items: center;
  cursor: text;
  border: none;
  background-color: transparent;
  padding: 0;

  & div:first-child {
    width: 20px;
    height: 20px;
    border: 1px solid #e8e0e0;
    border-radius: 20px;
    margin-right: 5px;
  }

  & > p {
    color: #b5b1b1;
    padding: 8px;
    margin: 5px 0;
    font-size: 12px;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid #cccccc;
    }
  }
`;

const questionFooterCss = css`
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #cccccc;
`;

const removeQuestionButtonCss = css`
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 0;
`;

function Question({
  questionTitle,
  enableEdition,
  answers,
  changeQuestion,
  index,
  changeOption,
  addOption,
  enableEditionInQuestion,
  removeQuestionOption,
  removeQuestion,
}: QuestionProps): JSX.Element {
  function handleQuestionClick() {
    enableEditionInQuestion(index);
  }

  return (
    <QuestionContainerStyled
      onClick={handleQuestionClick}
      enableEdition={enableEdition}
    >
      {enableEdition ? (
        <input
          css={questionInputCss}
          name="questionTitle"
          type="text"
          value={questionTitle}
          onChange={(e) => changeQuestion(e.target.name, e.target.value, index)}
        />
      ) : (
        <p css={questionTitleCss}>{questionTitle}</p>
      )}
      {/* {enableEdition && <button onClick={() => addOption(index)}>Agregar opción</button>} */}
      <div css={answersContainerCss}>
        {answers.map((answer, answerIdx) => {
          return (
            <Option
              key={`question-${index}${answerIdx}`}
              enableEdition={enableEdition}
              questionIdx={index}
              index={answerIdx}
              description={answer.description}
              changeOption={changeOption}
              removeQuestionOption={removeQuestionOption}
              isCorrect={answer.isCorrect}
            />
          );
        })}
        {answers.length < 4 && (
          <button css={addOptionCss} onClick={() => addOption(index)}>
            <div />
            <p>Añadir opción</p>
          </button>
        )}
      </div>

      {enableEdition && (
        <div css={questionFooterCss}>
          <button
            onClick={() => removeQuestion(index)}
            css={removeQuestionButtonCss}
          >
            <SvgIcon
              iconName="garbage"
              width="18px"
              height="18px"
              alt="Replay"
            />
          </button>
        </div>
      )}
    </QuestionContainerStyled>
  );
}

export default Question;
