import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class loja1627046928810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "loja",
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
                            name: "categoria",
                            type: "varchar"
                        },
                        {
                            name: "portao_id",
                            type: "uuid"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_loja",
                            referencedTableName: "portao",
                            referencedColumnNames: ["id"],
                            columnNames: ["portao_id"],
                            onDelete: "CASCADE",
                            onUpdate: "CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("loja")
    }

}
