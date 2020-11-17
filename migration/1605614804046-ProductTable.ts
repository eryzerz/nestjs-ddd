import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ProductTable1605614804046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(
            `INSERT INTO product("productId", "name", price)
            VALUES
            (uuid_generate_v4(), 'Spongebob spatula', 19000),
            (uuid_generate_v4(), 'Patrick rock', 33000),
            (uuid_generate_v4(), 'Squidward flute', 10000);
            `,
            undefined
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `DROP TABLE "product"`,
            undefined
        )
    }

}
