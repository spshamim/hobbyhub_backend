import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL;
let client;
let db;

async function connectDB() {
    if (db) return;

    try {
        if (!client) {
            client = new MongoClient(uri);
            await client.connect();
        }
        db = client.db("TestPH");
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        throw error;
    }
}

function getDB() {
    if (!db) {
        throw new Error("❌ Must call connectDB() before getDB()");
    }
    return db;
}

export { connectDB, getDB };
