import { Product } from "src/products/domain/product.entity";
import { PromotionDetails } from "src/promotion-details/domain/promo.detail.entity";
import { Promotions } from "src/promotions/domain/promo.entity";
import { User } from "src/users/domain/user.entity";
import { AfterInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orders {

    @PrimaryGeneratedColumn('uuid')
    orderId: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({nullable: true})
    promoDetailId: string

    @Column()
    userId: string

    @Column()
    productId: string

    @Column()
    qty: number

    @Column()
    total: number

    @Column()
    productPrice: number

    @Column({nullable: true})
    disc: string
    
    @ManyToOne(type => PromotionDetails, detail => detail.promoDetailId)
    @JoinColumn({ name: "promoDetailId" })
    promoDetail: PromotionDetails

    @ManyToOne(type => User, user => user.userId)
    @JoinColumn({ name: "userId" })
    user: User

    @ManyToOne(type => Product, product => product.productId)
    @JoinColumn({ name: "productId" })
    product: Product

}