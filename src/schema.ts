import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type BaseItem {
    id: ID!
    name: String!
    productTaxonomy: String!
    ingredients: [Ingredient!]
    products: [Product!]!
    recordId: Int!
  }

  type Ingredient {
    id: ID!
    name: String!
    recordId: Int!
  }

  type Product {
    id: ID!
    name: String!
    imageUrl: String!
    recordId: Int!
  }

  type Query {
    baseItems: [BaseItem!]!
    baseItem(id: ID!): BaseItem
  }

  type Mutation {
    addBaseItem(
        id: ID!
        name: String!
        productTaxonomy: String!
        ingredients: [IngredientInput!]
        products: [ProductInput!]!
        recordId: Int!
    ): BaseItem

    updateBaseItem(
        id: ID!
        name: String!
        productTaxonomy: String!
        ingredients: [IngredientInput!]
        products: [ProductInput!]!
        recordId: Int!
    ): BaseItem

    deleteBaseItem(id: ID!): BaseItem

    addProduct(
        baseItemId: ID!
        id: ID!
        name: String!
        imageUrl: String!
        recordId: Int!
    ): Product

    updateProduct(
        id: ID!
        name: String
        imageUrl: String
        recordId: Int
    ): Product

    deleteProduct(id: ID!): Product

    addIngredient(
        baseItemId: ID!
        id: ID!
        name: String!
        recordId: Int!
      ): Ingredient
  
    updateIngredient(
        id: ID!
        name: String!
        recordId: Int!
      ): Ingredient
  
    deleteIngredient(id: ID!): Ingredient
  }

  input ProductInput {
    name: String!
    imageUrl: String!
    recordId: Int!
  }

  input IngredientInput {
    name: String!
    recordId: Int!
  }
`;
