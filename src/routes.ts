import { Router } from "express";
import { NemEmpresa } from "./controllers/NewEmpresa";
import { AllSearch } from "./controllers/AllSearch";
import { SearchCnpj } from "./controllers/SearchCnpj";

const routes = Router()

routes.get('/', (req, res)=>{
 return res.json('cheguei no controlador de criar nova empresa')
})

routes.post('/CreateNewEmpresa', new NemEmpresa().create)//Criar uma nova empresa

routes.get('/allSearch', new AllSearch().AllEmpresa)//Listar todas as empresas cadastradas

 routes.get('/Searchcpnj/:cnpjA/start', new SearchCnpj().SearchCnpj)//Consultar uma empresa específica por CNPJ

//routes.pull('/empresa', new NemEmpresa().create)//Atualizar os dados de uma empresa. 

//routes.delete('/empresa', new NemEmpresa().create)//Excluir uma empresa 204 */


export default routes