
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import LaunchesCpnt from './components/LaunchesCpnt';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetRates {
        launches(limit: 5) {
          launch_date_utc
          launch_success
          rocket {
            rocket_name
          }
          details
          links {
            video_link
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <LaunchesCpnt />
    </div>
    </ApolloProvider>
  );
}

export default App;
