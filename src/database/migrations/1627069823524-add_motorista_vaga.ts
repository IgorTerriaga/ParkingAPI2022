import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class addMotoristaVaga1627069823524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("vaga", new TableColumn({
            name: "motorista_id",
            type: "uuid"
        }))
        await queryRunner.createForeignKey("vaga", new TableForeignKey({
            name: "fk_motorista_vaga",
            columnNames: ["motorista_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "motorista",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("vaga", "motorista_id");
        await queryRunner.dropForeignKey("vaga", "fk_motorista_vaga");

    }

}
