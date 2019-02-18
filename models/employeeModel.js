const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employees = new Schema(
    {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: Number
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    {
      collections: 'employees'
    }
);

module.exports = mongoose.model('employees', Employees);