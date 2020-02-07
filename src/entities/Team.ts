import {Entity, Column, PrimaryColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Driver } from "./Driver";
 
@Entity()
export class Team {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    name: string;

    @Column()
    country: string;

    @Column({
        name: "podium_finishes"
    })
    podiumFinishes: number

    @Column({
        name: "championship_titles"
    })
    championshipTitles: number

    @OneToMany(type => Driver, driver => driver.team)
    drivers: Driver[];
}