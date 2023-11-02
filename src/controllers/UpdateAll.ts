import { Request, Response } from "express";
import { newEmpresaRepository } from "../repositories/newEmpresaRepository";

export class UpdateDados{
    async UpdateAll(req: Request, res: Response){
        const { cnpjParams } = req.params
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

       
        try{ 
            const UpdateEmpresa = {
            nomeCliente:nomeCliente,
            senha:senha,
            nomeEmpresa:nomeEmpresa,
            cnpj:cnpj,
            cep:cep,
            endereco:endereco,
            numero:numero,
            telefone:telefone,
            email:email,
          };
          
         
         let empresa = await newEmpresaRepository.findOneBy({ cnpj:cnpjParams  })

         if(empresa){
            const newEmpresa = await newEmpresaRepository.update(empresa.id, UpdateEmpresa) 
            return res.status(200).json(newEmpresa)
         }else{
            return res.status(404).json('Empresa nao encontrada')
         }
        
             
       
           

        }catch (error){
            console.log(error)
            return res.status(500).json({ message: 'Internal Serve Error'})
        }

    }
}