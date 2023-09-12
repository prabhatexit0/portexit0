import Head from 'next/head'
import Layout from './layout'
import { Introduction, Leetcode, Gsoc, Projects } from '../components/widgets/'
import { GraphQLClient, gql } from 'graphql-request'

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
      data,
    },
  }
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Prabhat Sachdeva</title>
        <meta name="description" content="its my portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout heading={'Prabhat Sachdeva'}>
        <Introduction />
        <Gsoc />
        <Projects />
        <Leetcode data={data} />
      </Layout>
    </div>
  )
}
