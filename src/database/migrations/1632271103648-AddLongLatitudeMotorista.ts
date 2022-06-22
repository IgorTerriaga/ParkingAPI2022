import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddLongLatitudeMotorista1632271103648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("motorista", new TableColumn(
            {
                name: "latitude",
                type: "decimal",
                isNullable: true
            },
        ));
        await queryRunner.addColumn("motorista", new TableColumn(
            {
                name: "longitude",
                type: "decimal",
                isNullable: true
            },
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("motorista", "longitude");
        await queryRunner.dropColumn("motorista", "latitude");
    }

}
