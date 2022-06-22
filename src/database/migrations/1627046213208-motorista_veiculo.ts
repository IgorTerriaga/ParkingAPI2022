import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class motoristaVeiculo1627046213208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "motorista_veiculo",
                    columns: [
                        {
                            name: "motorista_id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "veiculo_id",
                            type: "uuid",
                            isPrimary: true
                        },

                    ],
                    foreignKeys: [
                        {
                            name: "fk_mv_motorista",
                            referencedTableName: "motorista",
                            referencedColumnNames: ["id"],
                            columnNames: ["motorista_id"],
                            onDelete: "CASCADE",
                            onUpdate: "CASCADE"
                        },
                        {
                            name: "fk_mv_veiculo",
                            referencedTableName: "veiculo",
                            referencedColumnNames: ["id"],
                            columnNames: ["veiculo_id"],
                            onDelete: "CASCADE",
                            onUpdate: "CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("motorista_veiculo");
    }

}
