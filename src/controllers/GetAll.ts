import { Request, Response } from "express";
import { newEmpresaRepository } from "../repositories/newEmpresaRepository";

export class AllSearch{
    async getAll(req: Request, res: Response){

        try{

            const newEmpresa = await newEmpresaRepository.find({})
            
            console.log(newEmpresa)
          
            return res.status(200).json(newEmpresa)
        }catch (error){
            console.log(error)
            return res.status(500).json({ message: 'Internal Serve Error'})
        }

    }
}