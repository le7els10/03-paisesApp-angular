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

  constructor(private paisService: PaisService) {}

  search = (termino: string) => {
    this.paises = [];
    this.termino = termino;
    this.hasError = false;

    this.paisService.searchCountry(this.termino).subscribe(
      (paises) => {
        console.log(paises);

        this.paises = paises;
      },
      (err) => {
        this.hasError = true;
        this.paises = [];
      }
    );
  };

  suggests = (event: any) => {
    console.log('here');
  };
}
