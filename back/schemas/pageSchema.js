const { gql } = require('apollo-server-express');

const pageSchema = gql`
  type Link {
    url: String!
    backgroundColor: String!
  }

  type Page {
    id: ID!
    slug: String!
    links: [Link!]!
  }

  type Query {
    getPage(slug: String!): Page
    getAllPages: [Page!]!
  }

  type Mutation {
    addPage(slug: String!, links: [LinkInput!]): Page
    updatePage(id: ID!, slug: String, links: [LinkInput!]): Page
    deletePage(id: ID!): String
  }

  input LinkInput {
    url: String!
    backgroundColor: String!
  }
`;

module.exports = pageSchema;
