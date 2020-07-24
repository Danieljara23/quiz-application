import {css} from "@emotion/core";
import useCreateQuestionnaire from "../../src/hooks/useCreateQuestionnaire";
import QuestionsManager from "../../src/components/QuestionsManager";

const createManagerCss = css`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
  max-width: 720px;
`;

const createManagerTitleAndDescriptionCss = css`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 15px 30px 10px 15px;
  box-shadow: 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
  border-top: 5px solid #5627a9ed;
  margin-bottom: 20px;
`;

const createManagerInputsCss = css`
  border: none;
  border-bottom: 1px solid #cccccc;
  padding: 8px;
  margin-bottom: 10px;
  transition: all 0.2s ease-in;

  &::placeholder {
    color: #3A3A3A;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-bottom-color: #279e88;
  }
`;

const titleCss = css`
  font-size: 22px;
`;

const descriptionCss = css`
  font-size: 14px;
  padding-left: 8px;
`;


function CreateQuestionnaire(){
  const { questionnaireState, addQuestion, addOption, changeMainInfo, changeQuestion, changeOption, enableEditionInQuestion, removeQuestionOption } = useCreateQuestionnaire();
  console.log(questionnaireState)
  return(
    <div css={createManagerCss}>
      <div css={createManagerTitleAndDescriptionCss}>
        <input css={[createManagerInputsCss, titleCss]} name="questionnaireTitle" type="text" value={questionnaireState.questionnaireTitle} onChange={(e)=>changeMainInfo(e.target.name, e.target.value)}/>
        <input css={[createManagerInputsCss, descriptionCss ]} name="description" type="text" value={questionnaireState.description} onChange={(e)=>changeMainInfo(e.target.name, e.target.value)} placeholder="Descripción del cuestionario"/>
      </div>
      <QuestionsManager
        questions={questionnaireState.questions}
        changeQuestion={changeQuestion}
        addQuestion={addQuestion}
        changeOption={changeOption}
        addOption={addOption}
        enableEditionInQuestion={enableEditionInQuestion}
        removeQuestionOption={removeQuestionOption}
      />
    </div>
  )
}

export default CreateQuestionnaire;