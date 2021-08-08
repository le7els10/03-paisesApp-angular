import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent {
  termino: string = '';
  hasError: boolean = false;
  paises: Country[] = [];
  paisesSuggests: Country[] = [];

  constructor(private paisService: PaisService) {}

  search = (termino: string) => {
    this.paises = [];
    this.termino = termino;
    this.hasError = false;

    this.paisService.searchCountry(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.hasError = true;
        this.paises = [];
      }
    );
  };

  suggests = (termino: string) => {
    console.log(termino);

    this.paisService.searchCountry(termino).subscribe((paises) => {
      console.log(paises);

      this.paisesSuggests = paises.splice(0, 5);
    });
  };
}
