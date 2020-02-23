import { gql } from 'apollo-boost';

export interface HeroesParams {
  first?: number;
  skip: number;
}

export const HEROES = gql`
  query Heroes($first: Int = 8, $skip: Int!) {
    heroes(first: $first, skip: $skip) {
      id
      full_name
      avatar_url
      description
      type {
        name
      }
    }
  }
`;
