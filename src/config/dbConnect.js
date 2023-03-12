import mongoose from "mongoose";

mongoose.connect("mongodb+srv://api-alura:teste123@livraria-dados.jiqzvgz.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;