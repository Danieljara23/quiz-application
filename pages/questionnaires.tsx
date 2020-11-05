import QuestionnaireCard from '../src/components/QuestionnaireCard/index';
import Layout from '../src/components/Layout/index';
import { css } from '@emotion/core';
import Link from 'next/link';
import { initializeApollo } from '../apollo/apolloClient';
import { QUESTIONNAIRES } from '../src/graphql/questionnaires.query';

const containerCss = css`
  width: 100%;
`;

const titleCss = css`
  display: flex;
  font-size: 30px;
`;

function Questionnaires({ response }): JSX.Element {
  const { data, loading } = response;

  if (loading) return <p>Loading</p>;
  // if(error) return <p>Ups, an error has ocurred</p>;
  return (
    <Layout css={containerCss} title="Categorías">
      <h1 css={titleCss}>Categorías</h1>
      {data?.questionnaires.map((questionnaire: any) => {
        return (
          <Link
            href={`questionnaire/${questionnaire.id}`}
            key={`questionnaire-${questionnaire.id}`}
          >
            <a href="/#">
              <QuestionnaireCard
                imageUrl={questionnaire.imageUrl}
                questionnaireTitle={questionnaire.questionnaireTitle}
              />
            </a>
          </Link>
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

export default Questionnaires;
