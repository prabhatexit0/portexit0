import Layout from "./layout";
import { Introduction, Leetcode } from '../components/widgets/'
import { GraphQLClient, gql } from "graphql-request";
import About from '../components/widgets/About'

export const getStaticProps = async () => {
  const endpoint = 'https://leetcode.com/graphql'
  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `
  const variables = `{ "username": "prabhatexit0" }`

  const data = await graphQLClient.request(query, variables)

  return {
    props: {
      data
    }
  }
}

export default function Home({ data }){
  return (
    <Layout heading={"Prabhat Sachdeva"}>
      <Introduction />
      <Leetcode data={data}/>
      <About/>
    </Layout >
  );
}
