import app from "./app";
import './database';
import { dbConnection } from './database/config';

//dbConnection()
app.listen(app.get("port"));
//console.log(app.get(dbConnection.port))
console.log("Server on port", app.get('port'));
