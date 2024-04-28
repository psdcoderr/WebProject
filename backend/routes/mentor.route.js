const express = require('express');
const router = express.Router();
const Todo = require('../models/Mentor.js'); 

router.get('/', async (req, res) => { 
    try {
        const todos = await Todo.find(); 
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/new', async (req,res) => {
    try {
        const newTask = await Todo.create(req.body);
        res.status(201).json({ newTask });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/delete/:id', async(req,res)=>{
    try {
        const result = await Todo.findByIdAndDelete(req.params.id)
        res.json(result)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        const updatedTask = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
    
        res.json(updatedTask);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
