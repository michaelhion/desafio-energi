import { Component, OnInit } from '@angular/core';
import { Endereco } from '../models/endereco';
import { LocalStorageService } from '../services/local-storage.service';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  pessoa! : Pessoa
  constructor(
    private localService:LocalStorageService
  ){}
  
  ngOnInit(): void {
    let json = this.localService.get('pessoaSalva');
    this.pessoa = JSON.parse(json);
    
  }


  
}
