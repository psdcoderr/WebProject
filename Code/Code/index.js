const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoute = require('./routes/user.route'); // Import user route

// Middleware (Used to parse data)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded data

// Connect to MongoDB
mongoose.connect('mongodb://root:example@10.10.3.15:27017/?retryWrites=true&w=majority', {
    dbName: 'quiztwo',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Routes
app.use('/users', userRoute); // Use user route

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send({ error: "Not found" });
});

const PORT = process.env.PORT || 3001; // Change to 3001 or any other available port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
