import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  //importar o ReactiveFormsModule
  formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder, private cadastroService : CadastroService) { 

    this.formGroup = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      data: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    })
  
  }

  ngOnInit() {
  }

  cadastrar(){
    this.cadastroService.insert(this.formGroup.value)
     .subscribe(response => {
       console.log("Cadastrado com sucesso");
     }, error => {
       console.log("Erro ao cadastrar");
     })

     console.log(this.formGroup.value);
  }

}
