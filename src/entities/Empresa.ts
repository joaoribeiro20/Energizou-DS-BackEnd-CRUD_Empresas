import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//temos que dizer que 
@Entity('EmpresasMain') //quando for criar a tabela aqui podemos definir o nome da tabela que vai ser criada
export class Empresa {

    @PrimaryGeneratedColumn()
    id:number

    @Column({ type: 'varchar' })
    nomeCliente: String

    @Column({ type: 'varchar' })
    senha: number

    @Column({ type: 'varchar' })
    nomeEmpresa: String

    @Column({ type: 'varchar' , unique:true})
    cnpj: string | Number

    @Column({ type: 'varchar' })
    cep: number

    @Column({ type: 'varchar'})
    endereco: string

    @Column({ type: 'varchar' })
    numero: number

    @Column({ type: 'varchar' })
    telefone: String

    @Column({ type: 'varchar' })
    email: string
}