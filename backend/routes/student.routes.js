let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Student Model
let studentSchema = require("../models/Student");

// CREATE Student
router.post("/create-student", async (req, res, next) => {
    try {
        const newData = req.body
        const createdData = await studentSchema.create(newData)
        res.json(createdData)
    }
    catch (error) {
        console.log(error)
    }
});

// READ Students
router.get("/", async (req, res) => {
    try {
        const readData = await studentSchema.find({})
        console.log(readData)
        res.json(readData)
    }
    catch (error) {
        console.log(error)
    }
});

// UPDATE student
router
.route("/update-student/:id")
// Get Single Student
.get(async (req, res) => {
    try {
        const newData = req.params.id
        const foundData = await studentSchema.findById(newData)
        res.json(foundData)
    }
	catch (error) {
        console.log(error)
    }
})

// Update Student Data
.put(async (req, res, next) => {
    try {
        const newData = req.params.id
        const updatedData = await studentSchema.findByIdAndUpdate(newData, {$set:req.body})
        res.json(updatedData)
        console.log("Student updated successfully!")
    }
    catch (error) {
        console.log(error)
    }
});

// Delete Student
router.delete("/delete-student/:id",
async (req, res, next) => {
    try {
        const newData = req.params.id
        const foundData = await studentSchema.findByIdAndRemove(newData)
        res.status(200).json({msg: foundData})
    }
    catch (error) {
        console.log(error)
    }
});

module.exports = router;

