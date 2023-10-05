import { Component , OnInit } from '@angular/core';
import { Carro } from './Carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent implements OnInit{

  carros: Carro[] = [
    {nome: "Honda City", ano: 2020},
    {nome: "Fiat Uno", ano: 2004},
    {nome: "Ford KA" , ano: 2014},
    {nome: "Honda Civic", ano: 2022},
    {nome: "Fiat Toro", ano: 2022},
    {nome: "Ford Fusion" , ano: 2018}
  ];


  constructor(){}
  ngOnInit(): void{}
}
