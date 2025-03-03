const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, age, password } = req.body;
        const user = new User({ name, email, age, password });
        await user.save();
        res.status(201).send({ message: "User saved successfully", user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).send({ message: "Invalid password" });
        }
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).send({ message: "Login successful", token });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;