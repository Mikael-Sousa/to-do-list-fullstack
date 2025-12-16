const express = require('express');
const authRoutes = require('./authRoutes');
const tasksRoutes = require('./tasksRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/tasks', tasksRoutes); 

module.exports = router;
