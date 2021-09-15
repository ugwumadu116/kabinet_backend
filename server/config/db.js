import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const connectionString = process.env.TEST_DATABASE_URL;

const db = new Pool({ connectionString });

export default db;
