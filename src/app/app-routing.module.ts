import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
    { path: 'navbar', component: NavbarComponent},
    { path: 'banner', component: BannerComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'header', component: HeaderComponent},
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {


} 