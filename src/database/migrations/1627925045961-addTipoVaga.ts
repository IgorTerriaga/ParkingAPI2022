import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addTipoVaga1627925045961 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("vaga", new TableColumn({
            name: "tipo",
            type: "varchar",
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("vaga", "tipo");
    }

}
