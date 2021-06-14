import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLSchema,
    GraphQLList,
} from 'graphql';

// const books = [
//     { name: 'Name of the Wild', genre: 'Fantasy', id: '1', authorId: '1' },
//     { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
//     { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
//     { name: 'The Wise Mans Fear', genre: 'Fantasy', id: '4', authorId: '1' },
//     { name: 'The Well of Ascension', genre: 'Fantasy', id: '5', authorId: '2' },
//     { name: 'The Hero of Ages', genre: 'Fantasy', id: '6', authorId: '2' },
// ];

// const authors = [
//     { name: 'Patrick Rothfuss', age: 48, id: '1' },
//     { name: 'Brandon Sanderson', age: 45, id: '2' },
//     { name: 'Terry Pratchett', age: 66, id: '3' },
// ];

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'GraphQL Book Object Type',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // return authors.find((author) => author.id === parent.authorId);
            },
        },
    }),
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'GraphQL Author Object Type',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args) {
                // return books.filter((book) => book.authorId === parent.id);
            },
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Root Query for GraphQL',
    fields: () => ({
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLID,
                },
            },
            resolve(parent, args) {
                // return books.find((book) => args.id === book.id);
            },
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return books;
            },
        },
        author: {
            type: AuthorType,
            args: {
                id: {
                    type: GraphQLID,
                },
            },
            resolve(parent, args) {
                // return authors.find((author) => args.id === author.id);
            },
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                // return authors;
            },
        },
    }),
});

export default new GraphQLSchema({
    query: RootQuery,
});
