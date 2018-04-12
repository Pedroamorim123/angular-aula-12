import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../domain/cadastro';

@Injectable()
export class CadastroService {

  constructor(public http:HttpClient) { }

  insert(obj : Cadastro){
    return this.http.post(
      `https://7345ae0f-6b5f-435e-b200-ce66acca7085.mock.pstmn.io/clientes`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
     
    );
  }
}
