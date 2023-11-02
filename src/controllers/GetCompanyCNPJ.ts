import { Request, Response } from "express";
import { newEmpresaRepository } from "../repositories/newEmpresaRepository";

export class SearchCnpj {
    async SearchCnpj(req: Request, res: Response) {
        const { cnpj } = req.params
        console.log(cnpj)
        try {
        
            const newEmpresa = await newEmpresaRepository.findOneBy({ cnpj:cnpj})
           
            console.log(newEmpresa?.cnpj)

            return res.status(201).json(newEmpresa)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Serve Error' })
        }

    }
}