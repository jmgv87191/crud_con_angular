import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private app: string;
  private api: string;

  constructor( private http:HttpClient ) { 

    this.app = environment.endpoint
    this.api = 'api/productos/'

  }

  getProducts():Observable<Product[]>  {
    return this.http.get<Product[]>( this.app + this.api )
  }

  deleteProducts( id:number ):Observable<void>{
    return this.http.delete<void>( this.app + this.api + id )
  }

  createProduct( body: Product ):Observable<void>{
    return this.http.post<void>(  this.app + this.api, (body) )
  }

}
