import { useSubscription, gql, useQuery } from '@apollo/client'
import { initializeApollo } from '../src/apollo'

const IntroQuery = gql`
query IntroQuery {
  name,
  date
}
`;

const SubQuery = gql`
subscription{
  count
}
`;

export default function Home() {

  const { loading, error, data } = useQuery(IntroQuery);

  const subRes = useSubscription(SubQuery);

  if (loading ?? subRes.loading) {
    return <h1>Loading...</h1>
  }

  const { name, date } = data;

  return (
    <div>
      <h1>
        {name}
      </h1>
      <h3>
        {date}
      </h3>
      <h1>Count : {subRes.data ? subRes.data.count : 0}</h1>
      <h2>
      </h2>
    </div>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: IntroQuery
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}