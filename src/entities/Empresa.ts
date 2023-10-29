import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//temos que dizer que 
@Entity('TableEmpresas') //quando for criar a tabela aqui podemos definir o nome da tabela que vai ser criada
export class Empresa {

    @PrimaryGeneratedColumn()
    id:number

    @Column({ type: 'text' })
    nomeCliente: String

    @Column({ type: 'int' })
    senha: number

    @Column({ type: 'text' })
    nomeEmpresa: String

    @Column({ type: 'int' })
    
    cnpj: string | Number

    @Column({ type: 'varchar' })
    cep: number

    @Column({ type: 'text' })
    endereco: string

    @Column({ type: 'int' })
    numero: number

    @Column({ type: 'varchar' })
    telefone: String

    @Column({ type: 'text' })
    email: string
}