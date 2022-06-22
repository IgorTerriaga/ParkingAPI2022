import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class addAcessoMotorista1627312568427 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("motorista", new TableColumn({
            name: "acesso_id",
            type: "uuid"
        }));
        await queryRunner.createForeignKey("motorista", new TableForeignKey({
            name: "fk_motorista_id_to_acesso",
            columnNames: ["acesso_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "acesso",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("motorista", "acesso_id");
        await queryRunner.dropForeignKey("motorista", "fk_motorista_id_to_acesso");
    }

}
