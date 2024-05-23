import { Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {
        path:'add',
        component: AddProductComponent
    },
    {
        path:'edit/:id',
        component: AddProductComponent
    },
    {
        path:'navbar',
        component: NavbarComponent
    },
    {
        path:'',
        component: ProductListComponent
    },
    {
        path:'**',pathMatch:'full',redirectTo:''
    }
];
