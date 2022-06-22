import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class veiculoVaga1627047172798 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "veiculo_vaga",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "veiculo_id",
                            type: "uuid",
                        },
                        {
                            name: "vaga_id",
                            type: "uuid",
                        },

                    ],
                    foreignKeys: [
                        {
                            name: "fk_veiculo",
                            referencedTableName: "veiculo",
                            referencedColumnNames: ["id"],
                            columnNames: ["veiculo_id"],
                            onDelete: "CASCADE",
                            onUpdate: "CASCADE"
                        },
                        {
                            name: "fk_vaga",
                            referencedTableName: "vaga",
                            referencedColumnNames: ["id"],
                            columnNames: ["vaga_id"],
                            onDelete: "CASCADE",
                            onUpdate: "CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("veiculo_vaga")
    }

}
