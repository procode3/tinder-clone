import express from "express";
import mongoose, { connect } from "mongoose";

// App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = `mongodb+srv://eriq:dbmong!@#@cluster0.pl1akyy.mongodb.net/tinderdb?retryWrites=true&w=majority` 




// Middlewares
// Db Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello, from backend!!'));

// Listeners
app.listen(port, () => console.log(`Listening on localhost: ${port}`));