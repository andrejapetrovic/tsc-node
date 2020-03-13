import { Driver } from "./entities/Driver";
import { Team } from "./entities/Team";
import { ConnectionOptions } from "typeorm";

export let dbconfig : ConnectionOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(<string>process.env.DB_PORT),
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
} 