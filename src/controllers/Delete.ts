import { Request, Response } from "express";
import { newEmpresaRepository } from "../repositories/newEmpresaRepository";

export class DeleteCompany{
    async deleteCompany(req: Request, res: Response){
        const { cnpj } = req.params
console.log(cnpj)
        try{
       
       let empresa = await newEmpresaRepository.findOneBy({ cnpj: cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5') })

       if(empresa){
          const newEmpresa = await newEmpresaRepository.delete(empresa.id) 
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
