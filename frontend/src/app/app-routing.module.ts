<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './pages/details/details.component'; 
import { HomeComponent } from './pages/home/home.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'details/:id/:item/:description', component: ProductDetailsComponent },
    { path: 'new-product', component: NewProductComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'login', component: LoginComponent },
    { path: 'list', component: ListComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './pages/details/details.component'; 
import { HomeComponent } from './pages/home/home.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'details/:id/:item/:description', component: ProductDetailsComponent },
    { path: 'new-product', component: NewProductComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'login', component: LoginComponent },
    { path: 'list', component: ListComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
>>>>>>> 0b77c95d46d0f9c005f8f8a198b1a9b2c9c5ed17
export class AppRoutingModule { }