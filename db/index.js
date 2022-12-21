const db = require('./connection');
class Database {
    constructor(db){
        this.db = db;
    }
    getAllEmployees(){
        return this.db.promise().query(
            'SELECT employees.id, employees.first, employees.last, roles.title, departments.name, roles.salary, CONCAT(manager.first, " ", manager.last) AS manager FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id LEFT JOIN employees manager ON manager.id = employees.manager_id;'
        )
    }
    getAllDepartments(){
        return this.db.promise().query(
            'SELECT departments.id, departments.name FROM departments;'
        )
    }
    getAllRoles(){
        return this.db.promise().query(
            'SELECT roles.id, roles.title, roles.salary, departments.name AS department FROM roles LEFT JOIN departments on roles.department_id = departments.id;'
        )
    }
    addNewDepartment(newDepart){
        return this.db.promise().query(
            'INSERT INTO departments SET ?', newDepart
        )
    }
    addNewEmployee(newEmploy){
        return this.db.promise().query(
            'INSERT INTO employees SET ?', newEmploy
        )
    }
    addNewRole(newRole){
        return this.db.promise().query(
            'INSERT INTO roles SET ?', newRole
        )
    }
}
module.exports = new Database(db)