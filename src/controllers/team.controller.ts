import { dbConnection } from "../app";
import { Team } from "../entities/Team";
import { Repository } from "typeorm";
import { Request, Response } from 'express';
import { Driver } from "../entities/Driver";

export class TeamController {

    private teamRepo: Repository<Team>;
    private driverRepo: Repository<Driver>;

    constructor() {
        this.init();
    }

    private async init() {
        let connection = await dbConnection;
        this.teamRepo = connection.getRepository(Team);
        this.driverRepo = connection.getRepository(Driver);
    }

    findAll = async (req: Request, res: Response) => {
        let teams = await this.teamRepo.find({ relations: ['drivers']});
        res.status(200).json(teams);
    }

    create = async (req: Request, res: Response) => {
        let inserted = await this.teamRepo.insert(req.body);
        res.status(200).send(inserted.raw[0]);
    }

    update = async (req: Request, res: Response) => {
        let team = await this.teamRepo.findOne(req.params.id)
        if (team) {
            let updateRes = await this.teamRepo.update(req.params.id, req.body);
            res.status(200).send();
        } else 
            res.status(400).send(`Team with id ${req.body.id} doesn't exist`);
    }

    delete = async (req: Request, res: Response) => {
        let team = await this.teamRepo.findOne(req.params.id);
        if (team) {
            await this.teamRepo.remove(team);
            res.status(200).send(); 
        } else 
            res.status(400).send(`Team with id ${req.params.id} doesn't exist, unable to delete`);
    }

    addDriver = async (req: Request, res: Response) => {

        let team = await this.teamRepo.findOne(req.params.teamId)
        if (!team) {
            res.status(400).send("Team doesn't exist");
            return;
        }
        let driver = await this.driverRepo.findOne(req.params.driverId, { relations: ['team'] });
        if (!driver) {
            res.status(400).send("Driver with that id doesn't exist");
        } else if (driver.team) {
            res.status(400).send("Driver cannot be part of more than 1 team");
        } else {
            delete driver.team;
            this.driverRepo.update(driver.id, { team: team });
            res.status(200).send({ teamId: team.id, driver: driver });
        }
    }

    removeDriver = async (req: Request, res: Response) => {

        let team = await this.teamRepo.findOne(req.params.teamId)
        if (!team) {
            res.status(400).send("Team doesn't exist");
            return;
        }
        let driver = await this.driverRepo.findOne(req.params.driverId, { relations: ['team']});
        if (!driver) {
            res.status(400).send("Driver with that id doesn't exist");
        } else if (driver.team.id === team.id) {
            this.driverRepo.update(driver.id, { team: undefined });
            res.status(200).send();
        } else {
            res.status(400).send("Driver is not part of that team");
        }
    }

}