# Desafio técnico 

## Overview

Esta aplicação tem como motivação o desafio proposto pela empresa ENERGIZOU, com o principal objetivo de desenvolver um sistema de gerenciamento de empresas. 

### 🛠 Tools

✔️  TypeScript

✔️  Node.Js

✔️  TypeORM

✔️  MySQL

✔️  Express

## **🎲 Getting Started**

---

```xml
# Clone este repositório
$ git clone https://github.com/joaoribeiro20/Energizou-DS-BackEnd-CRUD_Empresas.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Energizou-DS-BackEnd-CRUD_Empresas

# Instale as dependências
$ npm install

#Acesse o Arquivo data-source.ts para configurar informaçoes 
sobre o seu banco de dados MySQL

  type: "mysql",
	host: ,
	port: ,
	username: ,
	password:,
	database: 

# Execute o comando para rodar a migrations  
npm run migration:run

# Execute a aplicação 
$ npm run dev

# O servidor inciará na porta:8088 - acesse <http://localhost:8088>
```

## 🗒️ Roadmap - Function

- [x]  Criar uma nova empresa.
- [x]  Listar todas as empresas cadastradas.
- [x]  Consultar uma empresa específica por CNPJ.
- [x]  Atualizar os dados de uma empresa.
- [x]  Excluir uma empresa.

# 📍endpoints

## Criar uma nova empresa.

**method : POST**

```xml
http://localhost:8088/NewCompany
```

É necessário enviar no body da request dados como no exemplo a baixo. Campos como CEP, CNPJ EMAIL e TELEFONE podem ser enviado com a formatação CEP =  "00000-000" CPNJ = 00**.** 000**.** 000**/0001-00** telefone = (00)000000000

```xml
{
    "nomeCliente": "Joao",
    "senha": 55233,
    "nomeEmpresa": "Company Ribeiro",
    "cnpj": 00.000.000/0001-00,
    "cep": 00000-000,
    "endereco": "rua teste",
    "numero": 22,
    "telefone": (11)000000000,
    "email": "jvalves@gmail,.com"
}
```

**Formato do Retorno**

```xml
201 Created
```

## Listar todas as empresas cadastradas.

**method : GET**

```xml
http://localhost:8088/allSearch
```

**Formato do Retorno**

```xml
[
		{
		    "nomeCliente": "Vitor",
		    "senha": 5523,
		    "nomeEmpresa": "IT Alves",
		    "cnpj": 00.000.000/0001-00,
		    "cep": 00000-000,
		    "endereco": "rua teste",
		    "numero": 22,
		    "telefone": (11)000000000,
		    "email": "teste@gmail.com"
		}
		{
		    "nomeCliente": "Joao",
		    "senha": 55233,
		    "nomeEmpresa": "Company Ribeiro",
		    "cnpj": 00.000.000/0001-00,
		    "cep": 00000-000,
		    "endereco": "rua teste",
		    "numero": 22,
		    "telefone": (11)000000000,
		    "email": "teste@gmail.com"
		}
		....
]
```

## Consultar uma empresa específica por CNPJ.

**method : GET**

Para acessar os dados de uma empresa especifica é necessário informa um CNPJ no formato de **{14}** dígitos SEM outras caracteres, apenas as numéricas por exemplo: "01220330000130". Após o Searchcpnj/

```xml
http://localhost:8088/Searchcpnj/:cnpj
```

**Formato de Retorno**

```xml
{
    "nomeCliente": "Joao",
    "senha": 55233,
    "nomeEmpresa": "Company Ribeiro",
    "cnpj": 00.000.000/0001-00,
    "cep": 00000-000,
    "endereco": "rua teste",
    "numero": 22,
    "telefone": (11)000000000,
    "email": "jvalves@gmail,.com"
}
```

## Atualizar os dados de uma empresa.

**method : PUT**

Para editar os dados de uma empresa especifica é necessário informa um CNPJ no formato de **{14}** dígitos SEM outras caracteres, apenas as numéricas por exemplo: "01220330000130" e também enviar no body os dados alterados. 

```xml
http://localhost:8088/UpdateAll/:cnpjParams
```

Formado de envido do body

```xml
{
    "nomeCliente": "PessoaTeste",
    "senha": 33422,
    "nomeEmpresa": "Company Ribeiro",
    "cnpj": 00.000.000/0001-00,
    "cep": 00000-000,
    "endereco": "rua teste",
    "numero": 22,
    "telefone": (11)000000000,
    "email": "jvalves@gmail,.com"
}
```

**Formato de Retorno**

```xml
200 - Dados da empresa atualizado

404 - Empresa Não encontrada
```

## Excluir uma empresa.

**method : DELETE**

Para deletar uma empresa especifica é necessário informa um CNPJ no formato de **{14}** dígitos SEM outras caracteres, apenas as numéricas por exemplo: "01220330000130". Após o /DeleteCompany/

```xml
http://localhost:8088/DeleteCompany/:cnpj
```

**Formato de Retorno**

```xml
200 - Dados da empresa atualizado

404 - Empresa Não encontrada
```
