import { gql } from '@apollo/client';

export const ADD_BOOK = gql`
    mutation ($title: String!, $genre: String!, $authorId: ID!) {
        addBook(title: $title, genre: $genre, authorId: $authorId) {
            title
            genre
            id
        }
    }
`;
