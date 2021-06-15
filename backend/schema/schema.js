import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLSchema,
    GraphQLList,
} from 'graphql';
import Book from '../models/bookModel.js';
import Author from '../models/authorModel.js';

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'GraphQL Book Object Type',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return Author.findById(parent.authorId);
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
                return Book.find({ authorId: parent.id });
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
                return Book.findById(args.id);
            },
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({});
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
                return Author.findById(args.id);
            },
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find({});
            },
        },
    }),
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation for GraphQL',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
            },
            resolve(parent, args) {
                const author = new Author({
                    name: args.name,
                    age: args.age,
                });
                return author.save();
            },
        },
        addBook: {
            type: BookType,
            args: {
                title: { type: GraphQLString },
                genre: { type: GraphQLString },
                authorId: { type: GraphQLID },
            },
            resolve(parent, args) {
                const book = new Book({
                    title: args.title,
                    genre: args.genre,
                    authorId: args.authorId,
                });
                return book.save();
            },
        },
    },
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
