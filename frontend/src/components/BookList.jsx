import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = () => {
    const [bookId, setBookId] = useState(null);
    const { loading, error, data: books } = useQuery(GET_BOOKS);

    if (loading) return <h2>Loading books...</h2>;
    if (error) return <h2>Error {error}</h2>;

    return (
        <div className='booklist'>
            <ul>
                {books?.books.map((book) => {
                    return (
                        <li key={book.id} onClick={() => setBookId(book.id)}>
                            {book.title}
                        </li>
                    );
                })}
            </ul>
            {bookId && <BookDetails bookId={bookId} />}
        </div>
    );
};

export default BookList;
