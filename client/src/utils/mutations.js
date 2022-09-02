import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $username: String!, $bank: Int) {
    addUser(email: $email, password: $password, username: $username, bank: $bank) {
      user {
        email
      }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        email
      }
      token
    }
  }
`;