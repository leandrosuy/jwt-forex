const express = require('express');
const authMiddleware = require('../middlewares/auth');

const User = require('../models/User');

const router = express.Router();

router.use(authMiddleware);

router.get('/user', async (req, res) => {
    const user = await User.findOne({ _id: req.userId });
    return res.status(200).send(user);

});

module.exports = app => app.use('/projects', router);