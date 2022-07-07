import { Component } from '@angular/core';
import { BpostService } from './bpost.service';

interface CodeBpostType {
  info: {
    code: string;
    cep: string;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  codigoRastreioBr: string | unknown;
  code: string;
  cep: string;
  codeKey: string | unknown;
  messageError: string;

  constructor(private bpostService: BpostService) {
    this.code = '';
    this.cep = '';
    this.messageError = '';
  }



  get(event: any) {
    event.preventDefault();
    const cepFormatado = this.cep.replace(/\D/g, '');
    if(this.code && this.cep){
      window.open(`https://track.bpost.cloud/track/items?itemIdentifier=${this.code}&postalCode=${cepFormatado}`);
    } else {
      alert('Por favor, informe o número de compra e o CEP')
    }
  }
}
