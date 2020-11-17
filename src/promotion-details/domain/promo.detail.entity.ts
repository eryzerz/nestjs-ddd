import { Product } from "src/products/domain/product.entity";
import { Promotions } from "src/promotions/domain/promo.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PromotionDetails {

    @PrimaryGeneratedColumn('uuid')
    promoDetailId: string

    @Column()
    promoId: string

    @Column()
    productId: string

    @ManyToOne(type => Promotions, promo => promo.promoId)
    @JoinColumn({ name: "promoId" })
    promo: Promotions

    @ManyToOne(type => Product, product => product.productId)
    @JoinColumn({ name: "productId" })
    product: Product

}