import express from 'express';
import bodyParser from 'body-parser';
import MongoClient from 'mongodb';

const app = express();

app.use(bodyParser.json());

const withDb = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost');
        const db = client.db('my-idea');

        operations(db);

        client.close();
    }
    catch (error) {
        res.status(500).json({ message: "Error connecting to db" });
    }
}

app.post('/idea', (req, res) => {
    const { title } = req.body;
    const id = ideas.length + 1;

    withDb(async (db) => {
    });

    ideas.push({ id, title });

    idea = ideas.find(i => i.id === id);

    res.status(200).send(idea);
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Lestining on port ${PORT}`));

const ideas = [
    {
        id: 1,
        title: 'here is my title'
    },
    {
        id: 2,
        title: 'here is my title'
    },
    {
        id: 3,
        title: 'here is my title'
    },
    {
        id: 4,
        title: 'here is my title'
    },
    {
        id: 5,
        title: 'here is my title'
    },
    {
        id: 6,
        title: 'here is my title'
    }
]