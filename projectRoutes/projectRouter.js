const express = require('express');
const model = require('./projectModel');
const router = express.Router();

router.get('/resources', (req,res) => {
    model.findResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => res.status(500).json({message:'could not get resources'}))
});

router.get('/tasks', (req,res) => {
    model.findTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => res.status(500).json({message:'could not get tasks'}))
});

router.get('/', (req,res) => {
    model.findProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => res.status(500).json({message:'could not get projects'}))
});







router.post('/resources', (req,res) => {
    model.addResources(req.body)
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => res.status(500).json({message:'could not add resources'}))
});

router.post('/:id/tasks', (req,res) => {
    model.addTasks(req.params.id, req.body)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(err => res.status(500).json({message:'could not add task'}))
});

router.post('/', (req,res) => {
    model.addProjects(req.body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => res.status(500).json({message:'could not add project'}))
});














module.exports = router;