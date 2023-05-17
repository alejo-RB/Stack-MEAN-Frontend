import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {PortadaComponent} from "./components/portada/portada.component";
import {MenuComponent} from "./components/menu/menu.component";

//CRUD
import {CustomerComponent} from "./components/customer/customer.component"
import {ItemComponent} from "./components/item/item.component"
import {OrderComponent} from "./components/order/order.component"
import {ProductComponent} from "./components/product/product.component"

const app_routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'home', component: PortadaComponent},
	{path: 'menu', component: MenuComponent},
	
    {path: 'customer', component: CustomerComponent},
	{path: 'item', component: ItemComponent},
	{path: 'order', component: OrderComponent},
	{path: 'product', component: ProductComponent},
	
	{path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes); 