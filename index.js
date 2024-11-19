import express from 'express';
import connectDB from './config/db.js';
import usersRoutes from './apis/users.js';

const app = express();
app.use(express.json());
connectDB();

// Utilisation des routes des utilisateurs
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
