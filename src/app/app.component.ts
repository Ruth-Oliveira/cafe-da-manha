import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Funcionario } from './cadastro/servico/funcionario';
import { ItemFuncionario } from './cadastro/servico/item-funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Café da Manhã';

}
