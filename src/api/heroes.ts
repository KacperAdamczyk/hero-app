import { gql } from 'apollo-boost';

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

export const HERO = gql`
  query Hero($id: ID!) {
    hero(id: $id) {
      full_name
      avatar_url
      description
      type {
        name
      }
    }
  }
`;

export const CREATE_NEW_HERO = gql`
  mutation CreateNewHero(
    $fullName: String!
    $typeId: ID!
    $avatarUrl: String!
    $description: String!
  ) {
    createNewHero(
      full_name: $fullName
      type_id: $typeId
      avatar_url: $avatarUrl
      description: $description
    ) {
      id
    }
  }
`;

export const DELETE_HERO = gql`
  mutation DeleteHero($id: ID!) {
    deleteHero(id: $id) {
      id
    }
  }
`;
