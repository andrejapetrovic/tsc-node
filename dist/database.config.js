"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconfig = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    entities: [
        __dirname + "/entities/*.js"
    ],
    synchronize: true,
    logging: false,
    extra: {
        ssl: true
    }
};
