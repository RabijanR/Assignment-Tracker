let mongoose = require("mongoose");

// Assignment Schema
let assignmentSchema = mongoose.Schema(
    {
        title: String,
        course: String,
        dueDate: Date,
        status: String,
        description: String
    },
    {
        collection: "assignments"
    }
);

// Export the model
module.exports = mongoose.model("Assignment", assignmentSchema);
