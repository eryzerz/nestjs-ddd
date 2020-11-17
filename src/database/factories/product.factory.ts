import { Product } from "src/products/domain/product.entity";
import { define } from "typeorm-seeding";
import * as Faker from "faker"

define(Product, (faker: typeof Faker) => {
    const id = faker.random.uuid()
    const name = `${faker.random.word()} product`
    const price = faker.random.number()

    const product = new Product()
    product.productId = id
    product.name = name
    product.price = price

    console.log(product)
    return product
})