import Employee from '../model/product.model';

class EmployeeServices{
    async getAllEmployee(){
        let result;
        try {
            result = await Employee.find({});
        } catch (e) {
            throw new Error(e.message);
        }
        return result;
    }

    async createEmployee(employee){
        let result;
        try{
            result = await Employee.create(employee);
        }catch(e){ 
            throw new Error(e.message)
        }
        return result;
    }

    async deleteEmployee(employee){
        let result;
        try {
            result = await Employee.findOneAndDelete({employeeId : employee.employeeId});
        } catch (e) {
            throw new Error(e.message);
        }
        return result;
    }

    async updateEmployee(employee){
        let result;
        try {
            console.log(employee.employeeId)
            result = await Employee.findOneAndUpdate({fullName : employee.fullName}, employee, {new : true})
            console.log(result)
        } catch (e) {
            throw new Error(e.message);
        }
        return result;
    }
}


export default EmployeeServices;