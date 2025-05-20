import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);

let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db("TestPH");
        //console.log("✌️ Connected to MongoDB");
    } catch (error) {
        //console.error("❌ Error connecting to MongoDB", error);
        process.exit(1);
    }
}

async function getDB() {
    if (!db) {
        throw new Error("❌ First connect to the database");
    }
    return db;
}

export { connectDB, getDB };
