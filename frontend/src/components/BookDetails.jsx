import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BOOK } from '../queries/queries';

const BookDetails = ({ bookId }) => {
    const {
        loading,
        error,
        data: book,
    } = useQuery(GET_BOOK, {
        variables: {
            id: bookId || '60c7f260a377a515b83c888d',
        },
    });

    if (loading) return <h2>Loading book details...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div className='book-details'>
            <h2>{book?.book.title}</h2>
            <p>Genre: {book?.book.genre}</p>
            <p>
                Author: {book?.book.author.name} - {book?.book.author.age}
            </p>
            <p>Books:</p>
            <ul>
                {book?.book.author.books.map(({ title, id, genre }) => {
                    return (
                        <li key={id}>
                            {title} - {genre}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default BookDetails;
