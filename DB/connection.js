import mysql from "mysql2";
import { promisify } from "util";

const query = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "meds"
})
query.connect((err) => {
  if (err) {
    console.error("ERROR Connecting");
    return;
  }

  console.log("CONNECTION Successfully");
});
export default promisify(query.execute).bind(query);