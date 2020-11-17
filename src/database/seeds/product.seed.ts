import { Product } from "src/products/domain/product.entity";
import { Factory, Seeder } from "typeorm-seeding";

export class ProductSeeder implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(Product)().create()
    }
}