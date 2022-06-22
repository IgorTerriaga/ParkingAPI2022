import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddAttrRecomedadaTableVaga1628251140529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("vaga", new TableColumn({
            name: "recomendacao",
            type: "boolean",
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("vaga", "recomendacao");
    }

}
