import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { LoginComponent } from './sistema/login/login.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';
import { LivrosdetailsComponent } from './livros/livrosdetails/livrosdetails.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    PessoaslistComponent,
    FooterComponent,
    PessoasdetailsComponent,
    LoginComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    LivroslistComponent,
    LivrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
