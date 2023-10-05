import { Component , OnInit} from '@angular/core';
import { Livro } from './Livro';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent implements OnInit{

  livros: Livro[] = [
    {titulo: 'A sutil arte de ligar o f*da-se' , autor:'Mark Mason'},
    {titulo: 'O Senhor das Moscas' , autor:'William Golding'},
    {titulo: 'A Linha Negra' , autor:'Mario Teixeira'},
    {titulo: 'Medicina dos horrores' , autor:'Lindsey Fitzharris'}

  ];

  constructor(){}
  ngOnInit(): void{}
}
