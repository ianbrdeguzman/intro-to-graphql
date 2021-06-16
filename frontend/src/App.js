import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const App = () => {
    return (
        <div className='App'>
            <header>
                <h1>Intro to GraphQL</h1>
            </header>
            <main>
                <BookList />
                <AddBook />
            </main>
        </div>
    );
};

export default App;
