import gql from 'graphql-tag';

export const QUESTIONNAIRES = gql`
  query {
    questionnaires {
      id
      questionnaireTitle
      imageUrl
      questions {
        id
      }
    }
  }
`;
