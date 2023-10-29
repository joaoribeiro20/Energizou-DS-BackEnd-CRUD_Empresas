import { Request, Response } from "express";
import { newEmpresaRepository } from "../repositories/newEmpresaRepository";

export class DeleteEmpresa{
    async deleteEmpresa(req: Request, res: Response){
        const { nameEmpresa } = req.params

        try{
        let numeroA = nameEmpresa.match(/[0-9]+/g)
        const numeroComoString = numeroA?.join('');
       
        console.log(Number(numeroComoString))

       let empresa = await newEmpresaRepository.findOneBy({ cnpj: Number(numeroComoString)  })

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
