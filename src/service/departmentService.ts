import { pool } from '../connection.js';
// import { pool } from 'pg';

// TODO: create a getDepartments();
// TODO: create an addDepartment();

interface Department {
    id: number;
    name: string;
}

const getDepartments = async (): Promise<Department[]> => {
    try {
        const { rows } = await pool.query<Department>('SELECT * FROM departments');
        return rows;
    } catch (error) {
        console.error('Error fetching departments:', error);
        throw error;
    }
};

const addDepartment = async (name: string): Promise<void> => {
    try {
        await pool.query('INSERT INTO departments (name) VALUES ($1)', [name]);
        console.log(`Department '${name}' successfully added to database.`);
    } catch (error) {
        console.error('Error adding department:', error);
        throw error;
    }
};

export default { getDepartments, addDepartment };