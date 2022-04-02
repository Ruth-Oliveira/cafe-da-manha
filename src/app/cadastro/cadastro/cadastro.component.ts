import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../servico/funcionario';
import { ItemFuncionario } from '../servico/item-funcionario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  funcionario: Funcionario = new Funcionario();
  itemFuncionario: ItemFuncionario = new ItemFuncionario() ;

  listaItemCafeManha: ItemFuncionario[] = [];
  listaFuncionario: Funcionario[] = [];

  foiIncluido: boolean = false;
  isFuncionario: boolean = false;

  listarItens: string[] = [];


  ngOnInit(): void {

    this.preencherFuncionarios();
  }

  preencherFuncionarios() {

    let funcionario1: Funcionario = new Funcionario();
    funcionario1.nome = 'Laura';
    funcionario1.cpf = '07255329047';
    this.listaFuncionario.push( funcionario1 )

    let funcionario2: Funcionario = new Funcionario();
    funcionario2.nome = 'Bernardo';
    funcionario2.cpf = '53441877004';
    this.listaFuncionario.push( funcionario2 )

    let funcionario3: Funcionario = new Funcionario();
    funcionario3.nome = 'Lorenzo';
    funcionario3.cpf = '67557094093';
    this.listaFuncionario.push( funcionario3 )

    let funcionario4: Funcionario = new Funcionario();
    funcionario4.nome = 'Maria Clara';
    funcionario4.cpf = '24154769006';
    this.listaFuncionario.push( funcionario4 )

    let funcionario5: Funcionario = new Funcionario();
    funcionario5.nome = 'Sophia';
    funcionario5.cpf = '39290308028';
    this.listaFuncionario.push( funcionario5 )

    let funcionario6: Funcionario = new Funcionario();
    funcionario6.nome = 'Miguel';
    funcionario6.cpf = '47423227030';
    this.listaFuncionario.push( funcionario6 )

  }


  verificarFuncionario() {

    this.isFuncionario = false;

    for( let i=0; i < this.listaFuncionario.length; i++ ) {

      if ( this.funcionario.cpf == this.listaFuncionario[i].cpf ) {
        this.funcionario = this.listaFuncionario[i];
        this.isFuncionario = true;
        this.verificarItemFuncionario();
      }

    }

  }

  verificarItemFuncionario() {

    this.foiIncluido = false;

    for (let i=0; i < this.listaItemCafeManha.length; i++ ) {

      if( this.listaItemCafeManha[i].funcionario.cpf == this.funcionario.cpf ) {

        this.itemFuncionario = this.listaItemCafeManha[i];

        this.foiIncluido = true;
      }
    }

    if( !this.foiIncluido ) {

      this.itemFuncionario.funcionario = this.funcionario

    }
  }

  adicionar() {

    if ( !this.foiIncluido ) {
      this.itemFuncionario.funcionario = this.funcionario;
      this.listaItemCafeManha.push( this.itemFuncionario );
      alert('Incluído com sucesso!')
      this.limpar();

    } else {
      console.error('Funcionário já informou o item para o café da manhã!');
    }
  }

  excluir() {

    for (let i=0; i < this.listaItemCafeManha.length; i++ ) {

      if( this.listaItemCafeManha[i].funcionario.cpf == this.funcionario.cpf ) {

        this.listaItemCafeManha.splice(i,1);
        alert('Excluído com sucesso!');
        this.limpar();
        break;
      }
    }

  }

  alterar() {

    for (let i=0; i < this.listaItemCafeManha.length; i++ ) {

      if( this.listaItemCafeManha[i].funcionario.cpf == this.funcionario.cpf ) {

        this.listaItemCafeManha[i] = this.itemFuncionario;
        alert('Alterado com sucesso!');
        this.limpar();
        break;

      }
    }

  }

  limpar() {
    this.funcionario = new Funcionario();
    this.isFuncionario = false;
    this.foiIncluido = false;
    this.itemFuncionario = new ItemFuncionario();
    this.listarItens = [];
  }

  listar() {

    this.listaItemCafeManha.forEach( item =>{

      this.listarItens.push(

        item.funcionario.cpf + ' - ' +
        item.funcionario.nome + ' - ' +
        item.item + ' - ' +
        item.quantidade + ' - ' +
        item.unidadeMedida

      );
    } );

  }
}
