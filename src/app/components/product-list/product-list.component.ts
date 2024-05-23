import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {


  ListaProductos: Product[] = [];
  loader: boolean = false;

  constructor( private _productService: ProductService,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {

    this.getProducts()

  }

  getProducts(){
    this._productService.getProducts().subscribe((data)=>{
      this.ListaProductos = data
    })
  }

  deleteProduct( id:number ){
    this.loader = true
    this._productService.deleteProducts(id).subscribe(()=>{
      this.getProducts()
      this.loader = false
      this.showSuccess()
    })
  }

  showSuccess() {
    this.toastr.warning('Producto eliminado con exito!', 'Eliminado!',{    
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
  });}


}
