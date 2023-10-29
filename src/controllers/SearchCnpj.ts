import { Request, Response } from "express";
import { newEmpresaRepository } from "../repositories/newEmpresaRepository";

export class SearchCnpj{
    async SearchCnpj(req: Request, res: Response){
        const { cnpjA } = req.params
        try{

            console.log(cnpjA)

             const newEmpresa = await newEmpresaRepository.findOneBy({ senha: Number(cnpjA) })
            
            console.log(newEmpresa)

            return res.status(201).json(newEmpresa) 

        }catch (error){
            console.log(error)
            return res.status(500).json({ message: 'Internal Serve Error'})
        }

    }
}