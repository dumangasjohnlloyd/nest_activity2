import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class UserModuleEntity {

    @PrimaryGeneratedColumn()
    name: "id"
    id: number;

    @Column({name: "first_name"})
    firstName: string;

    @Column({name: "last_name"})
    lastName: string;

    @Column({name: "age"})
    age: number;

    @Column({name: "status"})
    status: string;

    @Column({name: "created_at"})
    created_at: Date;

    @Column({name: "created_by"})
    created_by: string;


}
