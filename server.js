const express = require('express'); 
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/ToDoRoutes');
const ToDo = require('./models/ToDolist');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/aoi/todo', toDoRoutes);


mongoose.connect(process.env.DB_URL).then(console.log('Connected to MongoDB, Praise the Lord')).catch(err => console.log(err));


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
     });

