/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Heroes
// ====================================================

export interface Heroes_heroes_type {
  __typename: "Type";
  name: string;
}

export interface Heroes_heroes {
  __typename: "Hero";
  id: string;
  full_name: string;
  avatar_url: string;
  description: string;
  type: Heroes_heroes_type;
}

export interface Heroes {
  heroes: Heroes_heroes[];
}

export interface HeroesVariables {
  first?: number | null;
  skip: number;
}
