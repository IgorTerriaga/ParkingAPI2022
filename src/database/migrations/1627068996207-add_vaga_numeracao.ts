import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addVagaNumeracao1627068996207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("vaga",
            new TableColumn(
                {
                    name: "numero",
                    type: "varchar"
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("vaga", "numero");
    }

}
