import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Productos } from '../../interfaces/productos';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [  RouterLink, ReactiveFormsModule, CommonModule ],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  form: FormGroup;

  constructor( private fg:FormBuilder ){

    this.form = this.fg.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required],
      stock: ['',Validators.required],
    })

  }

  addProduct(){


    const producto:Productos = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    }

    console.log("productillo", producto)

  }


}
