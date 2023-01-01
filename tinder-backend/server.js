import express from "express";
import mongoose, { connect } from "mongoose";
import Cards from './dbCards.js'
import Cors from 'cors';
import pass from ".env"

// App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = `mongodb+srv://eriq:${pass}@cluster0.pl1akyy.mongodb.net/tinderdb?retryWrites=true&w=majority`




// Middlewares
app.use(express.json());
app.use(Cors());

// Db Config
mongoose.set('strictQuery', true);
mongoose.connect(connection_url)

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello, from backend!!'));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
});



// Listeners
app.listen(port, () => console.log(`Listening on localhost: ${port}`));