import { AppDataSource } from "../data-source";
import { Empresa } from "../entities/Empresa";

export const newEmpresaRepository = AppDataSource.getRepository(Empresa)
