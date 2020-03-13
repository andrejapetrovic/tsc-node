import express from "express";
import { initRoutes } from './init';
import {createConnection, Connection} from "typeorm";
import { dbconfig } from './database.config';

const path = require('path');
export const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.static(__dirname + "/ngrx"));

/*
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
*/

export const dbConnection = new Promise<Connection> (resolve => {

    createConnection(dbconfig).then(async connection => {
        resolve(connection);
        console.log("Connected to database");
        await initRoutes();
        app.all('*', function (req, res) {
            res.sendFile(path.join(__dirname + '/ngrx/index.html'));
        });
    }).catch(error => console.log(error));
    
})





app.listen(port, () =>  console.log(`Server started on port ${port}!`) )

