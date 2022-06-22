import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddLongLatitudeVaga1632271110662 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("vaga", new TableColumn(
            {
                name: "latitude",
                type: "decimal",
                isNullable: false
            },
        ));
        await queryRunner.addColumn("vaga", new TableColumn(
            {
                name: "longitude",
                type: "decimal",
                isNullable: false
            },
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("vaga", "longitude");
        await queryRunner.dropColumn("vaga", "latitude");
    }


}
