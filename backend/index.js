const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 
require('dotenv').config(); 
const Todo = require('./models/Mentor.js');


const app = express(); 

app.use(express.json()); 
app.use(cors()); 

const port = 4001; 

const connectionString = process.env.MONGO_URI; 
mongoose.connect(connectionString,{
    dbName: 'TODO_Database',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to the database…'))
.catch((err) => console.error('Connection error:', err));

//Routes 
app.get('/todo', async (req, res) => { 
   const allTasks = await Todo.find();
   res.json(allTasks)
 });

app.post('/todo/new', async (req,res) => {
    const newTask = await Todo.create(req.body);
    res.status(201).json({newTask})
})

app.delete('/todo/delete/:id', async(req,res)=>{
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
})

app.patch('/todo/update/:id', async (req, res) => {
    try {
      const updatedTask = await Todo.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.json(updatedTask);
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));