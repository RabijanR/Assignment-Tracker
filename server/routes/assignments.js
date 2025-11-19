let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let  Assignment = require('../models/assignments');

//Get route for the Read assignment list - Read Operation
router.get('/assignments',async(requestAnimationFrame,resizeBy,next)=>{
    try
    {
        const AssignmentList = await Assignment.find();
        //console.log(AssignmentList);
        res.render('Assignments/list',{
            title:'Assignments',
            AssignmentList:AssignmentList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Assignments/list',{
            error: 'Error on server'
        })
    }
})

//Get route for displaying the Add page - Create Operation
router.get('/add' ,async(request,res,next)=>{
    try{
        res.render('Assignments/add',{
            title: 'Add a Assignment'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Assignments/add',{
            error:'Error on server'
        })
    }
})
//Post route for processing the Add page - Create Operation
router.get('/add' ,async(request,res,next)=>{
    try
    {
        let newAssignment = Assignment({
            "Title":request.body.title,
            "Course":request.body.Course,
            "DueDate":request.body.DueDate,
            "Status":request.body.Status,
            "Description":request.body.Description,
        });
        Assignment.Create(newAssignment).then(()=>{
            res.redirect('/assignments')
        })
    }
     catch(err)
    {
        console.error(err);
        res.render('Assignments/add',{
            error:'Error on server'
        })
    }
})
//Post route for processing the Add page - Create Operation
router.get('/add' ,async(request,res,next)=>{
    try
    {
        
    }
})
//Get route for displaying the Edit page - Update Operation
router.get('/edit/:id' ,async(request,res,next)=>{

})
//Post route for processing the Edit page - Update Operation
router.post('/edit/:id' ,async(request,res,next)=>{

})
//Get route for performing Delete Operation - Delete Operation
router.get('/delete/:id' ,async(request,res,next)=>{

})
module.exports = router;