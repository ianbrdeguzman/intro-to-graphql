import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.use('/', (req, res) => {
    res.status(200).send({ message: 'Intro to GraphQL' });
});

app.listen(PORT, () => {
    console.log(`Server is ready on port ${PORT}`);
});
