import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class vaga1627046684745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "vaga",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "portao_id",
                            type: "uuid"
                        },
                        {
                            name: "status",
                            type: "boolean"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_vaga",
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
        await queryRunner.dropTable("vaga")
    }

}
