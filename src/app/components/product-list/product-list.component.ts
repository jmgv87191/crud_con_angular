import { Component } from '@angular/core';
import { Productos } from '../../interfaces/productos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productos:Productos[]=[
    {
      id:1,
      name:"coca-cola",
      description: "refresco",
      price: 23,
      stock: 100
    },
    {
      id:2,
      name:"corona",
      description: "cerveza",
      price: 43,
      stock: 200
    },
  ]

}
