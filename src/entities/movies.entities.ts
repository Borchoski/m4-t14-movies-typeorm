import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Movies")
class Movies {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 50, unique: true })
    name: string;

    @Column({ type: "varchar", nullable: true })
    description?: string | undefined | null;

    @Column({ type: "integer" })
    duration: number;

    @Column({ type: "integer" })
    price: number;
}

export { Movies };
