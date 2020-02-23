import { gql } from 'apollo-boost';

export interface HeroesParams {
  skip?: number;
}

export const HEROES = gql`
  {
    heroes(first: 8, skip: $skip) {
      id
      full_name
      avatar_url
      description
    }
  }
`;
