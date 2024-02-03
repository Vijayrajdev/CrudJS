const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')
router.get('/',async(req,res) => {
   const employees = await Employee.find()
   res.json(employees)
})
router.get('/:id',async(req,res) => {
   const employee = await Employee.findById(req.params.id)
   res.json(employee)
   res.json(employees)
})
router.post('/',async(req,res) => {
   const employee = new Employee({
      name: req.body.name,
      age: req.body.age,
      designation: req.body.designation,
      bloodgroup: req.body.bloodgroup,
      fathername: req.body.fathername,
      experience: req.body.experience
   })
   try{
      const a1 = await employee.save()
      res.json(a1)

   }
   catch(err){
      res.json("Error")
   }
})

module.exports = router
