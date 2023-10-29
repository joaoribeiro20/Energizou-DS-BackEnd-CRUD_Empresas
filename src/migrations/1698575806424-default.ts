import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698575806424 implements MigrationInterface {
    name = 'Default1698575806424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`TableEmpresas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nomeCliente\` text NOT NULL, \`senha\` int NOT NULL, \`nomeEmpresa\` text NOT NULL, \`cnpj\` varchar(255) NOT NULL, \`cep\` varchar(255) NOT NULL, \`endereco\` text NOT NULL, \`numero\` int NOT NULL, \`telefone\` varchar(255) NOT NULL, \`email\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`TableEmpresas\``);
    }

}
