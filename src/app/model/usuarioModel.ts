import { BaseModel } from './baseModel';

export class UsuarioModel extends BaseModel {  
  name: string | undefined;  
  birth_date: string| undefined;
  access_level: BigInt | undefined;
  office_role: BigInt | undefined;
  sector: string | undefined;
}