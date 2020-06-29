import gql from "graphql-tag";

export const QUESTIONNAIRE = gql`
  query questionnaire($id: ID!) {
    questionnaire(id: $id){
      questionnaireTitle
      description
      imageUrl
      questions{
        questionTitle
        answers{
          id
          description
          isCorrect
        }
      }
    }
  }
`;