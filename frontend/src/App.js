import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const App = () => {
    return (
        <div className='App'>
            <BookList />
            <AddBook />
        </div>
    );
};

export default App;
