require('dotenv').config();


const express = require('express');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const eventController = require('./controllers/eventController');
const cors = require('cors');




const app = express();
app.use(express.json());
app.use('/events', eventController.verifyToken);
app.use(cors());

app.use('/users', userRoutes);
app.use('/events', eventRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
