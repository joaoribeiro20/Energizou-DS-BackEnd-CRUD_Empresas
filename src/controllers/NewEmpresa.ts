import { Request, Response } from "express";
import { newEmpresaRepository } from "../repositories/newEmpresaRepository";

export class NemEmpresa{
    async create(req: Request, res: Response){
        
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

        if(!nomeCliente){
            return res.status(400).json({ message: 'O nome é obrigatório'})
        }

        try{

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


            console.log(newEmpresa)

            await newEmpresaRepository.save(newEmpresa)
           // await newEmpresaRepository.

            return res.status(201).json(newEmpresa)

        }catch (error){
            console.log(error)
            return res.status(500).json({ message: 'Internal Serve Error'})
        }

    }
}