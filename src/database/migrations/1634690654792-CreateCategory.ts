import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategory1634690654792 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "categories",
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
