import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addTipoMotorista1627925469416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("motorista", new TableColumn({
            name: "deficiente",
            type: "boolean",
            isNullable: true
        }));

        await queryRunner.addColumn("motorista", new TableColumn({
            name: "idoso",
            type: "boolean",
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("motorista", "deficiente");
        await queryRunner.dropColumn("motorista", "idoso");
    }

}
