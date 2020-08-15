import gql from 'graphql-tag';

export const CREATE_QUESTIONNAIRE = gql`
  mutation createQuestionnaire($questionnaire: QuestionnaireInput) {
    createQuestionnaire(questionnaire: $questionnaire) {
      questionnaireTitle
    }
  }
`;
