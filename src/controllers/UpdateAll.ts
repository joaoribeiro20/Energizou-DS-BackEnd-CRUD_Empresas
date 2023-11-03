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

        const regex = /\S/
        const erro = []

        if (!regex.test(nomeCliente)) {
            erro.push('nome invalido')
        }
        const telefoneValidar = (a:string) =>{
            return a.replace(/\D/g, '')
        }
        console.log(telefoneValidar(telefone).length)
        if (telefoneValidar(telefone).length <= 9) {
            erro.push('telefone invalido')
        }
        const isEmailValid = (email:string) => {
            const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
            if(regex.test(email)){
              return email
            }else{
              return null
            }
          };
          if(isEmailValid(email) === null){
            erro.push('Email invalido')
          }
        if (cnpj.length <= 13) {
            erro.push('cnpj invalido')
        }
      /*   if (await newEmpresaRepository.findOneBy({ cnpj: cnpj.replace(/\D/g, '') })) {
            erro.push('empresa com cnpj ja cadastrada')
        }  */

        try {
            if (erro.length == 0) {
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
                }
           
         let empresa = await newEmpresaRepository.findOneBy({ cnpj:cnpjParams.replace(/\D/g, '')  })

         if(empresa){
            const newEmpresa = await newEmpresaRepository.update(empresa.id, UpdateEmpresa) 
            return res.status(200).json(newEmpresa)
         }else{
            return res.status(404).json('Empresa nao encontrada')
         }
        }else{
            return res.status(404).json(erro)
        }
             
        }catch (error){
            console.log(error)
            return res.status(500).json({ message: 'Internal Serve Error'})
        }

    }
}