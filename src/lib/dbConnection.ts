import mongoose from "mongoose";
import { number } from "zod";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already Connected to database")
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_DB_URI || "")
        console.log("Database Object: ",db)
        console.log("Database Connections: ",db.connections)

        connection.isConnected = db.connections[0].readyState
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log("DB Connection Failed", error)
        process.exit(1)
    }
}

export default dbConnect;