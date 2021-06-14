import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.use('/', (req, res) => {
    res.status(200).send({ message: 'Intro to GraphQL' });
});

app.listen(PORT, () => {
    console.log(`Server is ready on port ${PORT}`);
});
