let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Assignment = require('../models/assignments');

// READ – List Assignments
router.get('/', async (req, res, next) => {
    try {
        let assignmentList = await Assignment.find();
        res.render('Assignments/list', {
            title: 'Assignments',
            AssignmentList: assignmentList
        });
    } catch (err) {
        console.error(err);
        res.render('Assignments/list', { error: 'Server Error' });
    }
});

// DISPLAY ADD PAGE – CREATE
router.get('/add', (req, res, next) => {
    res.render('Assignments/add', { title: 'Add Assignment' });
});

// PROCESS ADD PAGE – CREATE
router.post('/add', async (req, res, next) => {
    try {
        let newAssignment = new Assignment({
            title: req.body.title,
            course: req.body.course,
            dueDate: req.body.dueDate,
            status: req.body.status,
            description: req.body.description
        });

        await newAssignment.save();
        res.redirect('/assignments');
    } catch (err) {
        console.error(err);
        res.render('Assignments/add', { error: 'Server Error' });
    }
});

// DISPLAY EDIT PAGE – UPDATE
router.get('/edit/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let assignment = await Assignment.findById(id);

        res.render('Assignments/edit', {
            title: 'Edit Assignment',
            assignment: assignment
        });

    } catch (err) {
        console.error(err);
        res.redirect('/assignments');
    }
});

// PROCESS EDIT PAGE – UPDATE
router.post('/edit/:id', async (req, res, next) => {
    try {
        let id = req.params.id;

        let updatedAssignment = {
            title: req.body.title,
            course: req.body.course,
            dueDate: req.body.dueDate,
            status: req.body.status,
            description: req.body.description
        };

        await Assignment.findByIdAndUpdate(id, updatedAssignment);
        res.redirect('/assignments');

    } catch (err) {
        console.error(err);
        res.redirect('/assignments');
    }
});

// DELETE – DELETE + CONFIRM POPUP
router.get('/delete/:id', async (req, res, next) => {
    try {
        await Assignment.findByIdAndDelete(req.params.id);
        res.redirect('/assignments');
    } catch (err) {
        console.error(err);
        res.redirect('/assignments');
    }
});

module.exports = router;
