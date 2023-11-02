import { Router } from "express";

import { NemEmpresa } from "./controllers/CreateNewCompany";
import { AllSearch } from "./controllers/GetAll";
import { SearchCnpj } from "./controllers/GetCompanyCNPJ";
import { UpdateDados } from "./controllers/UpdateAll";
import { DeleteCompany} from "./controllers/Delete";

const routes = Router()

routes.get('/', (req, res)=>{
 return res.json('inicio')
})

routes.post('/NewCompany', new NemEmpresa().createNewCompany)//Criar uma nova empresa

routes.get('/allSearch', new AllSearch().getAll)//Listar todas as empresas cadastradas

routes.get('/Searchcpnj/:cnpj', new SearchCnpj().SearchCnpj)//Consultar uma empresa específica por CNPJ

routes.put('/UpdateAll/:cnpjParams', new UpdateDados().UpdateAll)//Atualizar os dados de uma empresa. 

//routes.patch('/UpdateAll/:nameEmpresa', new UpdateDados().UpdateD)//Atualizar os dados de uma empresa. 

routes.delete('/DeleteCompany/:cnpj', new DeleteCompany().deleteCompany)//Excluir uma empresa 204 */


export default routes