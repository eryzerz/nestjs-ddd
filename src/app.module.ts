import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMConfig } from './ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './products/products.module';
import { PromotionsModule } from './promotions/promotions.module';
import { PromotionDetailsModule } from './promotion-details/promotion-details.module';
import { OrdersModule } from './orders/orders.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            resolverValidationOptions: {
                requireResolversForResolveType: false,
            },
        }),
        UsersModule,
        TypeOrmModule.forRoot(ORMConfig),
        ProductsModule,
        PromotionsModule,
        PromotionDetailsModule,
        OrdersModule,
    ],
})
export class AppModule {}
