import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Driver } from '../entities/Driver';
import { dbConnection } from '../app';

export class DriverController {
    
    private driverRepo: Repository<Driver>;

    constructor() {
        this.init();
    }

    private async init() {
        let connection = await dbConnection;
        this.driverRepo = connection.getRepository(Driver)
    }

    create = async (req: Request, res: Response) => {
        let driver: Driver = req.body;
        let inserted = await this.driverRepo.insert(driver);
        res.status(200).send(inserted.raw[0]);
    }
    
    findAll = async (req: Request, res: Response) => {
        let drivers = await this.driverRepo.find({ relations: ['team'], order: { points: 'DESC' }});
        res.status(200).json(drivers);
    }
  
    update = async (req: Request, res: Response) => {
        let driver = await this.driverRepo.findOne(req.params.id);
        if (driver) {
            await this.driverRepo.update(req.params.id, req.body);
            res.status(200).send();
        } else
            res.status(400).send(`Driver with id ${req.params.id} doesn't exist`);
    }

    delete = async (req: Request, res: Response) => {
        let driver = await this.driverRepo.findOne(req.params.id);
        if (driver) {
            await this.driverRepo.remove(driver);
            res.status(200).send(); 
        } else 
            res.status(400).send(`Driver with id ${req.params.id} doesn't exist, unable to delete`);
    }

    findByName = async (req: Request, res: Response) => {
        let drivers = await this.driverRepo.createQueryBuilder()
            .where("LOWER(name) = LOWER(:name)", { name: req.params.name })
            .getMany();
        res.status(200).json(drivers);
    }

    //ne radi, treba joinovati
    findByTeam = async (req: Request, res: Response) => {
        // sql
        // select * from driver where team_name = :name
        let drivers = await this.driverRepo.createQueryBuilder("driver")
            .select("driver.id")
            .where("LOWER(driver.team_name) = LOWER(:teamName)", { teamName: req.params.teamName })
            .getMany();
        res.status(200).send(drivers.map( (obj: any) => obj = obj.id) );
    }

    
    findTeamless = async (req: Request, res: Response) => {
        let drivers = await this.driverRepo.createQueryBuilder("driver")
            .where("driver.team_id is null")
            .getMany();
        res.status(200).json(drivers);
    }
}
