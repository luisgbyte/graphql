import { gql } from 'apollo-server';

export default gql`
   type Query {
    users: [User]
    user(id: Int): User
  }

  type User {
    id: ID
    name: String!
    email: String!
    password: String!
    todos: [Todo!] 
  }

  type Mutation {
    createUser(name: String, email: String, password: String): User!
    deleteUser(id: ID!): User
    updateUser(id: ID!, name: String, email: String, password: String): User
  }
`;