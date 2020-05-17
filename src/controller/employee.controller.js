import EmployeeServices from '../service/employee.services';

const Services = new EmployeeServices();

class EmployeeController{

    async getEmployee(req,res){
        try {
            let result = await Services.getAllEmployee();
            res.send(result);
        } catch (e) {
            res.status(500);
            res.json({message : e.message})
        }
    }

    async createEmployee(req,res){
        try {
            let result = await Services.createEmployee(req.body);
            res.send(result);
        } catch (e) {
            res.status(500);
            res.json({message : e.message})
        }
    }

    async deleteEmployee(req,res){
        try {
            let result = await Services.deleteEmployee(req.body);
            res.send(result);
        } catch (e) {
            res.status(500);
            res.json({message : e.message})
        }
    }
    async updateEmployee(req,res){
        try {
            console.log(req.body);
            let result = await Services.updateEmployee(req.body);
            res.send(result);
        } catch (e) {
            res.status(500);
            res.json({message : e.message})
        }
    }
}

export default EmployeeController;