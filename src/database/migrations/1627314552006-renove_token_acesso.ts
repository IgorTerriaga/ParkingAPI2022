import { MigrationInterface, QueryRunner } from "typeorm";

export class renoveTokenAcesso1627314552006 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("acesso", "token");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
