import express from 'express';
import surveys from '../data/userSurveys.js';
const router = express.Router();


router.get('/', (req, res) => {
    res.json(surveys)
});

router.get('/:id', (req, res) => {
    const survey = surveys.find(s => s.id === req.params.id)
    res.json(survey)
});

export default router;