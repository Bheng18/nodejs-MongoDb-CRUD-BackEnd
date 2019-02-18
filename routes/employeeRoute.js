const express = require('express');
const Router = express.Router();
const Employees = require('../models/employeeModel');

//get the employee records
Router.get('/', async (req, res)=>{
    //console.log(res.json());
    await Employees.find()
                   .then(employees => res.json({ employees })) //error ko {}
});

//get the employee records
Router.post('/', (req, res) => {
    const { firstname, lastname, email, phone } = req.body; 
    const newEmployee = new Employees({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone
    });
     newEmployee.save()
                .then((employee) => res.json({ employee }))
                .catch((err) => res.json({ success: false }));
});

//delete route
Router.delete('/:id', (req, res) => {
   const { id } = req.params;
   Employees.findById(id)
            .then((employee) => {
                employee.remove().then(() => res.json({ success: true }))
            })
            .catch((err) => res.json({ success: false }));
});

module.exports = Router;

