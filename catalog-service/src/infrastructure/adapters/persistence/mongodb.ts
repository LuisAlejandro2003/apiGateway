import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL || 'mongodb://localhost:27017/catalogDB');
export const db = client.db();
