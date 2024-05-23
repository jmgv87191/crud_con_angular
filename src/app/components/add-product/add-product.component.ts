import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ RouterLink, ReactiveFormsModule ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  form: FormGroup;
  producto!: Product;
  id!:number;
  loader: boolean = false;
  titulo: string = 'Agregar'


  constructor( private fb:FormBuilder,
        private _productService: ProductService,
        private aRoute: ActivatedRoute,
        private router: Router,
        private toastr: ToastrService
  ){

    this.form = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      price:[null, Validators.required],
      stock:[null, Validators.required],
    })

  }
  ngOnInit(): void {

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    

    if (this.id === 0 ) {

    }else{

      this._productService.getProduct(this.id).subscribe((data)=>{
        console.log(data)
        this.form.setValue({
          name: data.name,
          description: data.description,
          price: data.price,
          stock: data.stock,
        })
      })


    }

  }

  addProduct(){

    this.loader = true;

    this.producto = {
        name: this.form.value.name,
        description: this.form.value.description,
        price: this.form.value.price,
        stock: this.form.value.stock,
      }

      if (this.id === 0 ) {
        
        this._productService.createProduct( this.producto ).subscribe(()=>{
            this.router.navigate(['']);
            this.showSuccess()
        })

      }else{
        this._productService.updateProduct( this.id, this.producto ).subscribe(()=>{
          this.router.navigate(['']);
          this.showUpdate()
      })
      }

    
  }

  showSuccess() {
    this.toastr.success(`El producto ${this.form.value.name} fue agregado con exito` , 'Agregado!',{    
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
  });}

  showUpdate() {
    this.toastr.success(`El producto ${this.form.value.name} fue actualizado con exito` , 'Actualizado!',{    
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
  });}

}
