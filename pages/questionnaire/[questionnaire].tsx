import { useQuery } from '@apollo/react-hooks'
import gql from "graphql-tag";
import {css} from "@emotion/core";

const questionnaireQuery = gql`
  query questionnaire($id: ID!) {
    questionnaire(id: $id){
      questionnaireTitle
      description
      imageUrl
      questions{
        questionTitle
        answers{
          description
          isCorrect
        }
      }
    }
  }
`;

const containerCss = css`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  width: 100%;
  
  & img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  }
`;
  
const contentCss = css`
  display: flex;
  flex-direction: column;
  align-item: center;
  color: #707070;
  align-items: center;
  padding: 10px;
  
  & p{
    margin: 0;
    margin-bottom: 15px;
  }
`;

const buttonCss = css`
  border-radius: 32px;
  color: #4D0484;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border: none;
  width: 200px;
  height: 40px;
  justify-self: center;
  font-weight: bold;
`;


function Questionnaire({ props }){
  const  id  = props.questionnaire;

  const {data, loading, error} = useQuery(questionnaireQuery, {variables: {id}})
  console.log(data)
  if(loading) return <p>Loading</p>;
  if(error) return <p>Ups, ha ocurrido un error</p>;
  const { questionnaire } = data;

  return (
    <div css={containerCss}>
      <img src={questionnaire.imageUrl} alt={questionnaire.questionnaireTitle}/>
      <div css={contentCss}>
        <p>{questionnaire.description}</p>
        <button css={buttonCss}>Empezar</button>
      </div>
    </div>
  )
}

Questionnaire.getInitialProps = async ({query}:any) => {
  const questionnaire  = query.questionnaire;
  return { props: { questionnaire }}

}

export default Questionnaire;