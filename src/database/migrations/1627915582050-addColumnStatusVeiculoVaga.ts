import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnStatusVeiculoVaga1627915582050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('veiculo_vaga', new TableColumn(
            {
                name: 'status',
                type: "boolean",
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('veiculo_vaga', 'status');

    }

}
