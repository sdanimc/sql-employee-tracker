const db = require('./connection');
class Database {
    constructor(db){
        this.db = db;
    }
    getAllEmployees(){
        return this.db.promise().query(
            'SELECT employees.id, employees.first, employees.last, roles.title, departments.name, roles.salary, CONCAT(manager.first, " ", manager.last) AS manager FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON role.department_id = department.id LEFT JOIN employees manager ON manager.id = employee.manager_id;'
        )
    }
    getDepartments(){
        return this.db.promise().query(
            'SELECT departments.id, departments.name FROM department;'
        )
    }
    getRoles(){
        return this.db.promise().query(
            'SELECT roles.id, roles.title, roles.salary, departments.name AS department FROM roles LEFT JOIN departments on roles.department_id = departments.id;'
        )
    }
    addDepartment(newDepart){
        return this.db.promise().query(
            'INSERT INTO departments SET ?', newDepart
        )
    }
    addEmployee(newEmploy){
        return this.db.promise().query(
            'INSERT INTO employees SET ?', newEmploy
        )
    }
    addRole(newRole){
        return this.db.promise().query(
            'INSERT INTO roles SET ?', newRole
        )
    }
}
module.exports = new Database(db)