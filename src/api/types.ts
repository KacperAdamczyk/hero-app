import { gql } from 'apollo-boost';

export const TYPES = gql`
  query Types {
    types {
      id
      name
    }
  }
`;
