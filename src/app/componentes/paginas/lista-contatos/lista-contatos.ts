import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Conteiner } from '../../conteiner/conteiner';
import { Cabecalho } from '../../cabecalho/cabecalho';
import { Separador } from '../../separador/separador';
import { Contato } from '../../contato/contato';
import { FormsModule } from '@angular/forms';
import { FormularioContato } from '../formulario-contato/formulario-contato';
 
interface IContato{
  id: number
  nome: string
  telefone: string
}
 
import agenda from '../../../agenda.json';
import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-lista-contatos',
  imports: [CommonModule,
            Conteiner,
            Cabecalho,
            Separador,
            Contato,
            FormsModule,
            FormularioContato,
            RouterLink],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.css',
})
export class ListaContatos {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
 
  contatos: IContato[] = agenda;
 
  filtroPorTexto: string = '';
 
  private removerAcentos(texto:string): string{
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
 
  filtrarContatosPorLetraInicial(letra:string): IContato[]{
    return this.filtrarContatosPorTexto().filter( contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(letra);
    })
}
 
  filtrarContatosPorTexto(): IContato[] {
 
    if(!this.filtroPorTexto){
      return this.contatos
    }
 
    return this.contatos.filter( contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto.toLowerCase()));
    })
 
  }
}
 
 