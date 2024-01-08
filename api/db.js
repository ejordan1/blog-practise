import mysql from "mysql"

export const db = mysql.createConnection({
    host:"locahost",
    user:"root",
    password:"",
    database:"blog"
});