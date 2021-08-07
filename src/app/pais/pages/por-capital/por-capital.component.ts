import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss'],
})
export class PorCapitalComponent {
  termino: string = '';
  hasError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  search = (termino: string) => {
    this.paises = [];
    this.termino = termino;
    this.hasError = false;

    this.paisService.searchCapital(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.hasError = true;
        this.paises = [];
      }
    );
  };
}
