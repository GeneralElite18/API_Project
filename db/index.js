import mysql from "mysql2";
import config from "../config";

//connecting to databse
const connection = mysql.createPool(config.mysql);

export default connection;