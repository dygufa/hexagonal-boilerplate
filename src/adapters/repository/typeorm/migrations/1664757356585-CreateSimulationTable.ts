import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSimulationTable1664757356585 implements MigrationInterface {
    name = "CreateSimulationTable1664757356585";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "simulation_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "leadId" character varying NOT NULL, "userId" character varying NOT NULL, "courseId" character varying NOT NULL, "tuitionFeeSugestedByUser" integer NOT NULL, "numberOfLoanInstallments" integer NOT NULL, "numberOfSchoolInstallments" integer NOT NULL, "priceOfSchoolInstallments" integer NOT NULL, "priceOfLoanInstallments" integer NOT NULL, CONSTRAINT "PK_16a5d6330a413c8ac4e8151bab2" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "simulation_entity"`);
    }
}
