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
      this.bpostService
      .getBpost(this.code, cepFormatado)
      .subscribe((bpost) => {
          if(bpost.items){
            const code= bpost.items[0].webformUrl;
            this.codeKey = Object.values(code)[0];
            this.codigoRastreioBr = this.codeKey;
          } else {
            this.messageError = 'Desculpa não foi possível localizar seu código, aparentemente só vai chegar junto com o Aftermovie/2022';
          }


      });

    } else {
      alert('Por favor, informe o número de compra e o CEP')
    }
  }
}
