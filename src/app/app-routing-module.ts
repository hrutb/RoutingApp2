import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { LoginDashboardComponent } from "./shared/component/login-dashboard/login-dashboard.component";
import { HomeDashboardComponent } from "./shared/component/home-dashboard/home-dashboard.component";
import { ProductDashboardComponent } from "./shared/component/product-dashboard/product-dashboard.component";
import { ProductFormComponent } from "./shared/component/product-form/product-form.component";
import { ProductDetailsComponent } from './shared/component/product-details/product-details.component';
// import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from "./shared/component/user/user.component";
import { UserDetailsComponent } from "./shared/component/user/user-details/user-details.component";
import { UserFormComponent } from "./shared/component/user/user-form/user-form.component";


const routes : Routes = [
           {
             path:'',
             redirectTo:'login',
             pathMatch:'full'
           },
           {
             path:'login',
             component:LoginDashboardComponent
           } ,
           {
              path:'home',
              component:HomeDashboardComponent
           },
           {
               path:'user',
               component:UserComponent
           },
            {
                  path:'user/add',
                  component:UserFormComponent
            },
            {
               path:"user/:Uid",
               component:UserDetailsComponent
            },
            {
              path:'user/:Uid/edit',
              component:UserFormComponent
            },
           {
            path:'products',
            component:ProductDashboardComponent
           },
           {
             path:'products/add',
             component:ProductFormComponent
           },
           {
             path:"products/:id/edit",
             component:ProductFormComponent

           } ,
           {
             path:'products/:id',
             component:ProductDetailsComponent
           },
           {
             path:'home',
             component:HomeDashboardComponent
           } ,

           {
             path:'**',
             component:LoginDashboardComponent
           }
]






@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})




export class appRoutingModule{

}
