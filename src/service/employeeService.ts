import { pool } from '../connection.js';

// TODO: create a getAllEmployees();
// TODO: create an addEmployee();
// TODO: create an updateEmployee();

interface Employee {
    id: number;
    first_name: string;
    last_name: string;
    title: string;
    department: string;
    salary: number;
}

const getAllEmployees = async (): Promise<Employee[]> => {
    try {
        const { rows } = await pool.query<Employee>(`
        SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary
        FROM employees
        JOIN roles ON employees.role_id = roles.id
        JOIN departments ON roles.department_id = departments.id
        `);
        return rows;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

const addEmployee = async (firstName: string, lastName: string, roleId: number) => {
    try {
        const result = await pool.query('INSERT INTO employees (first_name, last_name, role_id) VALUES ($1, $2, $3)', [firstName, lastName, roleId]);
        return result;
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
};

const updateEmployee = async (employeeId: number, newRoleId: number) => {
    try {
        const result = await pool.query('UPDATE employees SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
        return result;
    } catch (error) {
        console.error('Error updating employee role:', error);
        throw error;
    }
};

export default { getAllEmployees, addEmployee, updateEmployee };