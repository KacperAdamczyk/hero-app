/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateNewHero
// ====================================================

export interface CreateNewHero_createNewHero {
  __typename: "Hero";
  id: string;
}

export interface CreateNewHero {
  createNewHero: CreateNewHero_createNewHero;
}

export interface CreateNewHeroVariables {
  fullName: string;
  typeId: string;
  avatarUrl: string;
  description: string;
}
