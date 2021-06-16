import React, { useRef } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_AUTHORS, GET_BOOKS } from '../queries/queries';
import { ADD_BOOK } from '../mutation/mutation';

const AddBook = () => {
    const { loading, error, data: authors } = useQuery(GET_AUTHORS);
    const [addBook] = useMutation(ADD_BOOK);

    const titleRef = useRef(null);
    const genreRef = useRef(null);
    const authorRef = useRef(null);

    if (loading) return <h2>Loading authors...</h2>;
    if (error) return <h2>Error {error}</h2>;

    const handleSubmitOnClick = (e) => {
        e.preventDefault();

        if (
            titleRef.current.value !== '' &&
            genreRef.current.value !== '' &&
            authorRef.current.value !== ''
        ) {
            addBook({
                variables: {
                    title: titleRef.current.value,
                    genre: genreRef.current.value,
                    authorId: authorRef.current.value,
                },
                refetchQueries: [
                    {
                        query: GET_BOOKS,
                    },
                ],
            });
        }

        e.target.reset();
    };

    return (
        <div className='add-book'>
            <form onSubmit={handleSubmitOnClick}>
                <h2>Add a new book</h2>
                <div>
                    <label htmlFor='title'>Book Title: </label>
                    <br />
                    <input ref={titleRef} type='text' id='title' />
                </div>
                <div>
                    <label htmlFor='genre'>Book Genre: </label>
                    <br />
                    <input ref={genreRef} type='text' id='genre' />
                </div>
                <div>
                    <select ref={authorRef} name='author' id='author'>
                        <option value='' hidden>
                            Select Author
                        </option>
                        {authors?.authors.map((author) => {
                            return (
                                <option key={author.id} value={author.id}>
                                    {author.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddBook;
