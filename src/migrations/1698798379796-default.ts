import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698798379796 implements MigrationInterface {
    name = 'Default1698798379796'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`EmpresasMain\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nomeCliente\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, \`nomeEmpresa\` varchar(255) NOT NULL, \`cnpj\` varchar(255) NOT NULL, \`cep\` varchar(255) NOT NULL, \`endereco\` varchar(255) NOT NULL, \`numero\` varchar(255) NOT NULL, \`telefone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_8803550c20847a9cc70371ebae\` (\`cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_8803550c20847a9cc70371ebae\` ON \`EmpresasMain\``);
        await queryRunner.query(`DROP TABLE \`EmpresasMain\``);
    }

}
