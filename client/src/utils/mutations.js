import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
      saveBook(bookData: $bookData) {
          _id
          username
          email
          savedBooks {
              bookId
              authors
              description
              title
              image
              link
          }
      }
  }
  `

  export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
      deleteBook(bookId : $bookId) {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
      }
  }
  `