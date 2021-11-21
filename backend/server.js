import express from 'express';
import dotenv from 'dotenv';
import surveys from './data/userSurveys.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.get('/api/surveys', (req, res) => {
    res.json(surveys)
});

app.get('/api/surveys/:id', (req, res) => {
    const survey = surveys.find(s => s.id === req.params.id)
    res.json(survey)
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));