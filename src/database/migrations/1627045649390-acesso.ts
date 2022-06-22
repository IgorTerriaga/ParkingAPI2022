import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class acesso1627045649390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "acesso",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "motorista_id",
                            type: "uuid"
                        },
                        {
                            name: "email",
                            type: "varchar"
                        },
                        {
                            name: "token",
                            type: "varchar"
                        },
                        {
                            name: "senha",
                            type: "varchar"
                        }
                    ],
                    foreignKeys: [
                        {
                             name: "fk_motorista_acesso",
                             referencedTableName: "motorista",
                             referencedColumnNames: ["id"],
                             columnNames: ["motorista_id"],
                             onDelete: "CASCADE",
                             onUpdate: "CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("acesso")
    }

}
