import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addPemissaoAcesso1627312258452 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("acesso", new TableColumn({
            name: "permissao",
            type: "varchar"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("acesso", "permissao");
    }

}
