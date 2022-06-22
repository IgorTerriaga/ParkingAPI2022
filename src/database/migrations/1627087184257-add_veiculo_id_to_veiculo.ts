import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class addVeiculoIdToVeiculo1627087184257 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("veiculo", new TableColumn({
            name: "motorista_id",
            type: "uuid"
        }))
        await queryRunner.createForeignKey("veiculo", new TableForeignKey({
            name: "fk_motorista_id_to_veiculo",
            columnNames: ["motorista_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "motorista",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("veiculo", "motorista_id");
        await queryRunner.dropForeignKey("veiculo", "fk_motorista_id_to_veiculo");

    }

}
