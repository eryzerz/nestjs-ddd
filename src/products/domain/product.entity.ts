import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn('uuid')
    productId: string;

    
    @Column({ length: 100 })
    name: string;

    
    @Column()
    price: number;
}
