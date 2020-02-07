import {Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, Entity, ManyToOne, JoinColumn} from "typeorm";
import { Team } from "./Team";
 
@Entity()
export class Driver {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;

    @Column()
    country: string;

    @Column()
    points: number;

    @ManyToOne(type => Team, team => team.drivers, { nullable: true, cascade: true })
    @JoinColumn({ name: "team_id" })
    team: Team;

}