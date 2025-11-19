let mongoose = require("mongoose");

// Create a model

let assignmentModel = mongoose.Schema(
    {
    title: String,
    course: String,
    dueDate: Date,
    status: String,
    description: String
    },
    {
        collection:"assignments"
    }
);
module.exports=mongoose.model('Assignment', assignmentSchema);