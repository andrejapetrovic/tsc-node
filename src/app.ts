import express from "express";
import { initRoutes } from './init';
import {createConnection, Connection} from "typeorm";
import { dbconfig } from './database.config';

export const app = express();
const port = 4000;
app.use(express.json())

app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

export const dbConnection = new Promise<Connection> (resolve => {

    createConnection(dbconfig).then(connection => {
        resolve(connection);
        console.log("Connected to database");
        initRoutes();
    }).catch(error => console.log(error));
    
})

app.listen(port, () =>  console.log(`Server started on port ${port}!`) )