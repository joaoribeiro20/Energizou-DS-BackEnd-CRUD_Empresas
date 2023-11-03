import { Request, Response } from "express";
import { newEmpresaRepository } from "../repositories/newEmpresaRepository";

export class NemEmpresa {
    async createNewCompany(req: Request, res: Response) {

        const {
            nomeCliente,
            senha,
            nomeEmpresa,
            cnpj,
            cep,
            endereco,
            numero,
            telefone,
            email
        } = req.body

        const regex = /\S/
        const erro = []

        if (!regex.test(nomeCliente)) {
            erro.push('nome invalido')

        }

        if (cnpj.length <= 17) {
            erro.push('cnpj invalido')
        }
        if (await newEmpresaRepository.findOneBy({ cnpj: cnpj.replace(/\D/g, '') })) {
            erro.push('empresa com cnpj ja cadastrada')
        }

        try {
            if (erro.length == 0) {
                const newEmpresa = newEmpresaRepository.create({
                    nomeCliente,
                    senha,
                    nomeEmpresa,
                    cnpj,
                    cep,
                    endereco,
                    numero,
                    telefone,
                    email
                })

                newEmpresa.cnpj = cnpj.replace(/\D/g, '');
                newEmpresa.cep = cep.replace(/\D/g, '');
                await newEmpresaRepository.save(newEmpresa)
                return res.status(201).json('Created')
            } else {
                console.log(erro)
                return res.status(400).json(erro)
            }

        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }

    }
}