import { css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { QUESTIONNAIRES } from '../../src/graphql/questionnaires.query';
import { initializeApollo } from '../../apollo/apolloClient';
import QuestionnaireAdminCard from '../../src/components/QuestionnaireAdminCard';

const containerCss = css`
  width: 100%;
`;

const mainTitleCss = css`
  color: #3a3a3a;
  font-size: 24px;
`;

const questionnairesContainerCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 30px;
`;

const questionnairesHeaderCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: 30px 30% 10% 50%;
  grid-gap: 10px;
  padding: 0 5px;

  & p {
    font-weight: bold;
    color: #b5b5b5;
    font-size: 14px;
  }
`;

const navCss = css`
  display: grid;
  grid-template-columns: 150px auto;
  width: 100%;
  padding: 0 30px;
`;

const goToCreateCss = css`
  background-color: #2b6c92;
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  width: 150px;
  height: 30px;
  border-radius: 6px;
  text-decoration: none;
`;

const navElementsCss = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function Admin({ response }): JSX.Element {
  console.log(response);
  const { data, loading } = response;
  return (
    <Layout css={containerCss} title="Admin">
      <div css={navCss}>
        <h1 css={mainTitleCss}>Categorías</h1>
        <div css={navElementsCss}>
          <Link href="/admin/createquestionnaire">
            <a href="/#" css={goToCreateCss}>
              Nuevo Cuestionario
            </a>
          </Link>
        </div>
      </div>
      <div css={questionnairesContainerCss}>
        <div css={questionnairesHeaderCss}>
          <p>Id</p>
          <p>Nombre del cuestionario</p>
          <p>Número de preguntas</p>
          <p>Opciones</p>
        </div>
      </div>
      {data?.questionnaires.map((questionnaire) => {
        return (
          <QuestionnaireAdminCard
            key={`questionnaire-${questionnaire.id}`}
            questionnaireTitle={questionnaire.questionnaireTitle}
            questionCount={questionnaire.questions.length}
            questionnaireId={questionnaire.id}
          />
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const response = await apolloClient.query({
    query: QUESTIONNAIRES,
  });

  console.log(response);
  return {
    props: {
      response,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Admin;
