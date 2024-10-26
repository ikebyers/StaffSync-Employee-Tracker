import { config } from 'dotenv';
config();

import pg from 'pg';
const { Pool } = pg;


const pool = new Pool({
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT)
});

const dbConnect = async () => {
    try {
        await pool.connect();
    } catch (err) {
        process.exit(1);
    }
};

export { pool, dbConnect };