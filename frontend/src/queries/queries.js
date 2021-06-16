import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
    query {
        books {
            title
            genre
            id
            author {
                name
            }
        }
    }
`;

export const GET_BOOK = gql`
    query ($id: ID!) {
        book(id: $id) {
            title
            genre
            author {
                name
                age
                books {
                    title
                    genre
                    id
                }
            }
        }
    }
`;

export const GET_AUTHORS = gql`
    query {
        authors {
            name
            id
        }
    }
`;
