import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroService } from './services/cadastro.service';
import { ErrorInterceptor } from './services/interceptor-error';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CadastroService, ErrorInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
