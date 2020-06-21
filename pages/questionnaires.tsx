import { useQuery } from '@apollo/react-hooks'
import gql from "graphql-tag";
import QuestionnaireCard from "../src/components/QuestionnaireCard/index";
import {css} from "@emotion/core";

const containerCss = css`
  width:100%;
`;

const titleCss = css`
  display: flex;
`;
const questionnairesQuery = gql`
  query{
    questionnaires{
      id
      questionnaireTitle
    }
  }
`;

interface Questionnaire {
  id: string,
  questionnaireTitle: string
}

interface QuestionnairesData {
  questionnaires: [Questionnaire]
}

function Questionnaires(){
  const {data, loading, error} = useQuery<QuestionnairesData>(questionnairesQuery);


  if(loading) return <p>Loading</p>;
  if(error) return <p>Ups, an error has ocurred</p>;
  console.log(data);
  // const {questionnaires} = data;
  return(
    <div css={containerCss}>
      <h1 css={titleCss}>Categorías</h1>
      {data?.questionnaires.map((questionnaire:any) => {
        return(
          <QuestionnaireCard
            questionnaireTitle={questionnaire.questionnaireTitle}
          />
        )
      })}
    </div>
  )

}



export default Questionnaires;