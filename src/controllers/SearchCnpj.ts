import { Request, Response } from "express";
import { newEmpresaRepository } from "../repositories/newEmpresaRepository";

export class SearchCnpj {
    async SearchCnpj(req: Request, res: Response) {
        const { cnpjA } = req.params
        try {
            let numeroA = cnpjA.match(/[0-9]+/g)
            const numeroComoString = numeroA?.join('');
           
            console.log(Number(numeroComoString))

            const newEmpresa = await newEmpresaRepository.findOneBy({ cnpj: Number(numeroComoString)  })
           
            console.log(newEmpresa?.nomeEmpresa)

            return res.status(201).json(newEmpresa)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Serve Error' })
        }

    }
}