import { Component , OnInit} from '@angular/core';
import {Pessoa} from './Pessoa'

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent implements OnInit{

  pessoas: Pessoa[] = [
    {nome: 'Matheus', idade:19},
    {nome: 'Rafael', idade:18},
    {nome: 'João', idade:20},
    {nome: 'Bruno', idade:32},
    {nome: 'Lucas', idade:24},
    {nome: 'Anderson', idade:31},
    {nome: 'Mario', idade:37},
    {nome: 'Fernando', idade:36},
    {nome: 'Eduardo', idade:34},
    {nome: 'William', idade:38}
  ]

  constructor(){}
  ngOnInit(): void{}
}
