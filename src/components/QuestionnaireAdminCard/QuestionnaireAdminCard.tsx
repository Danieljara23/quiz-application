import { css } from '@emotion/core';

const questionnaireCardCss = css`
  display: grid;
  grid-template-columns: 30px 30% 10% 50%;
  grid-gap: 10px;
  border-bottom: 1px solid #dadeec;
  margin: 0 30px;
  border-radius: 5px;
  padding: 5px;

  & p {
    font-size: 12px;
    font-weight: bold;
  }
`;

const idCss = css`
  font-weight: bold;
  text-align: center;
`;

const questionCountCss = css`
  justify-self: center;
`;

const optionsContainerCss = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const optionButtonCss = css`
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  margin: 0 5px;
  font-size: 12px;
  height: 25px;
`;

const editButtonCss = css`
  background-color: orange;
`;

const deleteButtonCss = css`
  background-color: #fb7474;
`;

interface Props {
  questionnaireId: number;
  questionnaireTitle: string;
  questionCount: number;
}

function QuestionnaireAdminCard({
  questionnaireId,
  questionnaireTitle,
  questionCount,
}: Props): JSX.Element {
  return (
    <div css={questionnaireCardCss}>
      <p css={idCss}>{questionnaireId}</p>
      <p>{questionnaireTitle}</p>
      <p css={questionCountCss}>{questionCount}</p>
      <div css={optionsContainerCss}>
        <button css={[optionButtonCss, editButtonCss]}>✏ Editar</button>
        <button css={[optionButtonCss, deleteButtonCss]}> 🗑 Eliminar</button>
      </div>
    </div>
  );
}

export default QuestionnaireAdminCard;
