const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    username: String!
    # bank: Int
  }

  type Auth {
    user: User
    token: ID
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    addUser(email: String!, password: String!, username: String!): Auth
    loginUser(email: String!, password: String!): Auth
    # addBet(user_bet: INT!): User
  }
`;

module.exports = typeDefs;