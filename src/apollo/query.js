import gql from "graphql-tag";

export const FETCH_COUNTER = gql`
  query getCounter {
    counter @client
  }
`;
