import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: 's314Prj!ev',
  database:"blog"
})