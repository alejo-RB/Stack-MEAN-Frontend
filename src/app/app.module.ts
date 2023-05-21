import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { ItemComponent } from './components/item/item.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FooterComponent} from './components/footer/footer.component'

//Rutas
import {app_routing} from "./app.routes";
import { PortadaComponent } from './components/portada/portada.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent,
    ItemComponent,
    ProductComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PortadaComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
	app_routing,
	HttpClientModule,
	FormsModule,
 NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
