import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class portao1627046438220 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "portao",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "nome",
                            type: "varchar"
                        },
                        {
                            name: "estacionamento_id",
                            type: "uuid"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_portao",
                            referencedTableName: "estacionamento",
                            referencedColumnNames: ["id"],
                            columnNames: ["estacionamento_id"],
                            onDelete: "CASCADE",
                            onUpdate: "CASCADE"
                        }
                    ]
                }

            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("portao")
    }

}
