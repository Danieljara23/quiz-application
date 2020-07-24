import { useQuery } from '@apollo/react-hooks'
import gql from "graphql-tag";
import QuestionnaireCard from "../src/components/QuestionnaireCard/index";
import  Layout from "../src/components/Layout/index";
import {css} from "@emotion/core";
import Link from 'next/link';
import { initializeApollo } from "../apollo/apolloClient";

const containerCss = css`
  width:100%;
`;

const titleCss = css`
  display: flex;
  font-size: 30px;
`;

const QUESTIONNAIRES_QUERY = gql`
query {
  questionnaires{
    id
      questionnaireTitle
      imageUrl
  }
}
`;

interface Questionnaire {
  id: string,
  questionnaireTitle: string
  imageUrl: string
}

interface QuestionnairesData {
  questionnaires: [Questionnaire]
}

function Questionnaires({response}){

  const {data, loading} = response
  // const {data, loading, error} = useQuery<QuestionnairesData>(QUESTIONNAIRES_QUERY);


  if(loading) return <p>Loading</p>;
  // if(error) return <p>Ups, an error has ocurred</p>;
  return(
    <Layout css={containerCss} title="Categorías">
      <h1 css={titleCss}>Categorías</h1>
      {data?.questionnaires.map((questionnaire:any) => {
        return(
          <Link href={`questionnaire/${questionnaire.id}`}>
          <a href="">
            <QuestionnaireCard
              key={`questionnaire-${questionnaire.id}`}
              imageUrl={questionnaire.imageUrl}
              questionnaireTitle={questionnaire.questionnaireTitle}
            />
          </a>
          </Link>
        )
      })}
    </Layout>
  )

}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const response = await apolloClient.query({
    query: QUESTIONNAIRES_QUERY,
  })

  console.log(response)
  return {
    props: {
      response,
      initialApolloState: apolloClient.cache.extract(),
    }
  }
}

export default Questionnaires;