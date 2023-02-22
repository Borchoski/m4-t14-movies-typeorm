import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Movies")
class Movies {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 50, unique: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    duration: number;

    @Column()
    price: number;
}

export { Movies };
