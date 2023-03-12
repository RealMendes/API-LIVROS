import mongoose from "mongoose";

//mongoose.connect(""); -->Conexão com DB Mongose. Usar URL.

let db = mongoose.connection;

export default db;