const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const ManagementRoute = require('./routes/Mentor.route'); // Import user route


// Middleware (Used to parse data)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded data
app.use(cors({origin:"http://localhost:3000",
credentials:true}));


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
    dbName: 'ContributionProject',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Routes
app.use('/mentor', ManagementRoute); // Use user route

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send({ error: "Not found" });
});

const PORT = process.env.PORT || 4007; // Change to 4001 or any other available port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
