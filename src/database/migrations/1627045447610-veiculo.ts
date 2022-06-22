import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class veiculo1627045447610 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "veiculo",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "modelo",
                            type: "varchar"
                        },
                        {
                            name: "placa",
                            type: "varchar"
                        },
                        {
                            name: "cor",
                            type: "varchar"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("veiculo")
    }

}
