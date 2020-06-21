import { useQuery } from '@apollo/react-hooks'
import gql from "graphql-tag";

const questionnairesQuery = gql`
  query{
    questionnaires{
      id
      questionnaireTitle
    }
  }
`;

type QuestionnairesData = {
  questionnaires: {
    id: string,
    questionnaireTitle: string
  }
}

function Questionnaires(){
  const {data, loading, error} = useQuery<QuestionnairesData>(questionnairesQuery);


  if(loading) return <p>Loading</p>;
  if(error) return <p>Ups, an error has ocurred</p>;
  console.log(data);
  return(
    <div>
      <p>Hello</p>
    </div>
  )

}



export default Questionnaires;