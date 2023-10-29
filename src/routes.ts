import { Router } from "express";
import { NemEmpresa } from "./controllers/NewEmpresa";
import { AllSearch } from "./controllers/AllSearch";
import { SearchCnpj } from "./controllers/SearchCnpj";
import { UpdateDados } from "./controllers/UpdateDados";
import { DeleteEmpresa } from "./controllers/DeleteEmpresa";

const routes = Router()

routes.get('/', (req, res)=>{
 return res.json('inicio')
})

routes.post('/CreateNewEmpresa', new NemEmpresa().create)//Criar uma nova empresa

routes.get('/allSearch', new AllSearch().AllEmpresa)//Listar todas as empresas cadastradas

routes.get('/Searchcpnj/:cnpjA', new SearchCnpj().SearchCnpj)//Consultar uma empresa específica por CNPJ

routes.put('/UpdateAll/:nameEmpresa', new UpdateDados().UpdateD)//Atualizar os dados de uma empresa. 

//routes.patch('/UpdateAll/:nameEmpresa', new UpdateDados().UpdateD)//Atualizar os dados de uma empresa. 

routes.delete('/DeleteEmpresa/:nameEmpresa', new DeleteEmpresa().deleteEmpresa)//Excluir uma empresa 204 */


export default routes