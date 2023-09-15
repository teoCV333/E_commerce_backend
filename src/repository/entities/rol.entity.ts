import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rol')
export class Rol extends BaseEntity {

    @PrimaryGeneratedColumn({ name:'id', type: 'int' })
    id: number;

    @Column({ name: 'name', nullable: false, type: "varchar", length:50 })
    name: string;

    @Column({ name: 'status', nullable: false, type: "tinyint", default: 1 })
    status: number;

}