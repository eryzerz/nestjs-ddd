import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Promotions {
    
    @PrimaryGeneratedColumn('uuid')
    promoId: string

    @Column({ length: 100 })
    title: string

    @Column()
    discount: string

    @Column()
    startDate: string

    @Column()
    endDate: string
}