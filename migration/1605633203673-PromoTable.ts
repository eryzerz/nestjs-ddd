import {MigrationInterface, QueryRunner} from "typeorm";

export class PromoTable1605633203673 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `INSERT INTO promotions("promoId", "title", "discount", "startDate", "endDate")
            VALUES
            (uuid_generate_v4(), 'Half price promo', '0.5', '2020-11-18T17:36:10.705Z', '2020-11-20T17:36:10.705Z'),
            (uuid_generate_v4(), 'New year promo', '0.4', '2020-12-25T17:36:10.705Z', '2021-01-01T17:36:10.705Z'),
            (uuid_generate_v4(), 'Christmas promo', '0.3', '2020-11-19T17:36:10.705Z', '2020-12-25T17:36:10.705Z');
            `,
            undefined
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `DROP TABLE "promotions"`,
            undefined
        )
    }

}
