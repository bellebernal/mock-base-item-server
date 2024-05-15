import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type BaseItem {
    id: ID!
    name: String!
    productTaxonomy: String!
    isForRecipes: Boolean!
    mappedRecipeCount: Int!
    mappedProductCount: Int!
    recordId: Int!
  }

  input AddBaseItemInput {
    name: String!
    productTaxonomy: String!
    isForRecipes: Boolean!
    mappedRecipeCount: Int!
    mappedProductCount: Int!
  }

  input UpdateBaseItemInput {
    id: ID!
    name: String
    productTaxonomy: String
    isForRecipes: Boolean
    mappedRecipeCount: Int
    mappedProductCount: Int
    recordId: Int
  }

  type Query {
    getBaseItems: [BaseItem!]!
    getBaseItemById(id: ID!): BaseItem
  }

  type Mutation {
    addBaseItem(input: AddBaseItemInput!): BaseItem!
    updateBaseItem(input: UpdateBaseItemInput!): BaseItem!
    deleteBaseItem(id: ID!): Boolean!
  }
`;