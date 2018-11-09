
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
    { path: 'navbar', component: NavbarComponent},]
  
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {


} 