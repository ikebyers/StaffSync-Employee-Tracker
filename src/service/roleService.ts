import { pool } from '../connection.js';

// TODO: create a getAllRoles();
// TODO: create an addRole();

interface Role {
    id: number;
    title: string;
    salary: number;
    department_id: number;
}

const getAllRoles = async (): Promise<Role[]> => {
    try {
        const { rows } = await pool.query<Role>('SELECT * FROM roles');
        return rows;
    } catch (error) {
        console.error('Error fetching roles:', error);
        throw error;
    }
};

const addRole = async (title: string, salary: number, departmentId: number) => {
    try {
        const result = await pool.query('INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
        return result;
    } catch (error) {
        console.error('Error adding role:', error);
        throw error;
    }
};

export default { getAllRoles, addRole };