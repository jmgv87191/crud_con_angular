import { Routes } from '@angular/router';
import path from 'node:path';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [

    {
        path: "add",
        component: AddProductsComponent
    },

    {
        path: "edit/:id",
        component: AddProductsComponent
    },

    {
        path: "navbar",
        component: NavbarComponent
    },

    {
        path: "",
        component: ProductListComponent
    },

    {
        path: "**",pathMatch: "full", redirectTo: ""
    },

];
