const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// For creating a new user
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});

// For getting a single user
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.send(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

// For deleting a single user
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await User.findByIdAndDelete(id);
        res.send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

// For updating a single user
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updates = req.body;
        const options = { new: true };
        const result = await User.findByIdAndUpdate(id, updates, options);
        res.send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;