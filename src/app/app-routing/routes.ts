import {  Routes  } from '@angular/router';


import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { ContactComponent } from '../contact/contact.component';


export const route: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactus', component: ContactComponent},
    {path: 'menu', component: MenuComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];