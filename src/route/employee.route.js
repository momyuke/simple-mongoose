import express from 'express';
import Controller from '../controller/employee.controller';


const EmployeeController = new Controller();
const router = express.Router();

router.get('/', (req,res) => EmployeeController.getEmployee(req,res));
router.post('/', (req,res) => EmployeeController.createEmployee(req,res));
router.delete('/', (req,res) => EmployeeController.deleteEmployee(req,res));
router.put('/', (req,res) => EmployeeController.updateEmployee(req,res));

export default router;

