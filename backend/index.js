import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/posts.js';

// Setting our App to Express:
const app = express();

// Setting Body Parser:
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Setting up Cors:
app.use(cors());

// Setting up Routes:
app.use('/admin', userRoutes);

const CONNECTION_URL = 'mongodb+srv://Kumar123:140920@cluster0.mrixd.mongodb.net/adminPage?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// Connecting to Database and Listening to PORT:
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Server is running at PORT ${PORT} \nDatabase is connected`)))
    .catch((error) => console.log(error.message));