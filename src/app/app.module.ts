import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CadastrarEmpresaComponent } from './components/cadastrar-empresa/cadastrar-empresa.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListarEmpresaComponent } from './components/listar-empresa/listar-empresa.component';
import { CadastrarProfissionalComponent } from './components/cadastrar-profissional/cadastrar-profissional.component';
import { ListarProfissionalComponent } from './components/listar-profissional/listar-profissional.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarEmpresaComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ListarEmpresaComponent,
    CadastrarProfissionalComponent,
    ListarProfissionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
