import mongoose, { Schema } from "mongoose";


var employee = new Schema({
    employeeId : {
        type : String,
        require : true
    },
    fullName : {
        type : String,
        require : true
    }, 
    dateOfBirth : {
        type : String
    },

    department : {
        type : String
    } 
});

var employeeModel = mongoose.model('employee', employee, 'empDetails');

export default employeeModel;