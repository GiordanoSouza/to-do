const express = require('express');
const {createToDo} = require('../controllers/toDoController');
const router = express.Router();

router.get('/test', (_req, res) => {
    res.send('Test route is working');
});

router.post('/create-to-do', createToDo);

module.exports = router;