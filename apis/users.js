import express from 'express';
import User from '../models/users.js';

const router = express.Router();

router.post('/create', async (req, res) => {
    const { matricule, email, session } = req.body;
    try {
        const newUser = new User({ matricule, email, session });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching users', error });
    }
});

export default router;
