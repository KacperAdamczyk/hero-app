/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Hero
// ====================================================

export interface Hero_hero_type {
  __typename: "Type";
  name: string;
}

export interface Hero_hero {
  __typename: "Hero";
  full_name: string;
  avatar_url: string;
  description: string;
  type: Hero_hero_type;
}

export interface Hero {
  hero: Hero_hero;
}

export interface HeroVariables {
  id: string;
}
