import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1733686237503 implements MigrationInterface {
    name = 'Initial1733686237503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "position" character varying NOT NULL, "grade" character varying NOT NULL, CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "publicationDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "author_books" ("author_id" integer NOT NULL, "book_id" integer NOT NULL, CONSTRAINT "PK_d8330e39e9fcf9314d13a3f6325" PRIMARY KEY ("author_id", "book_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d68c3bd017096097568e0465f9" ON "author_books" ("author_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_680fd0d757d5faa49a63a27deb" ON "author_books" ("book_id") `);
        await queryRunner.query(`CREATE TABLE "book_categories" ("book_id" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_76506a56b5e205f79d9cdfc39ef" PRIMARY KEY ("book_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bf7e0293afeaeacbe28b7f96e4" ON "book_categories" ("book_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_2f8815188674efa2fc146b329e" ON "book_categories" ("category_id") `);
        await queryRunner.query(`ALTER TABLE "author_books" ADD CONSTRAINT "FK_d68c3bd017096097568e0465f9e" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "author_books" ADD CONSTRAINT "FK_680fd0d757d5faa49a63a27deb6" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "book_categories" ADD CONSTRAINT "FK_bf7e0293afeaeacbe28b7f96e43" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_categories" ADD CONSTRAINT "FK_2f8815188674efa2fc146b329e5" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_categories" DROP CONSTRAINT "FK_2f8815188674efa2fc146b329e5"`);
        await queryRunner.query(`ALTER TABLE "book_categories" DROP CONSTRAINT "FK_bf7e0293afeaeacbe28b7f96e43"`);
        await queryRunner.query(`ALTER TABLE "author_books" DROP CONSTRAINT "FK_680fd0d757d5faa49a63a27deb6"`);
        await queryRunner.query(`ALTER TABLE "author_books" DROP CONSTRAINT "FK_d68c3bd017096097568e0465f9e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2f8815188674efa2fc146b329e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf7e0293afeaeacbe28b7f96e4"`);
        await queryRunner.query(`DROP TABLE "book_categories"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_680fd0d757d5faa49a63a27deb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d68c3bd017096097568e0465f9"`);
        await queryRunner.query(`DROP TABLE "author_books"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "books"`);
        await queryRunner.query(`DROP TABLE "authors"`);
    }

}
