import { Component, OnInit } from '@angular/core';
import { Endereco } from '../models/endereco';
import { LocalStorageService } from '../services/local-storage.service';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  pessoas: Pessoa[] = [];
  constructor() { }

  ngOnInit(): void {
    let json = localStorage.getItem('pessoaSalva');
    if (json != null) {
      let p = JSON.parse(json) || "";
      p.forEach((pessoa: Pessoa) => {
        this.pessoas.push(pessoa);
      })
    }

  }



}
