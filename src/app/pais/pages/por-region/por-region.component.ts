import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss'],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  paises!: Country[];

  constructor(private paisService: PaisService) {}

  activarRegion = (region: string) => {
    this.activeRegion = region;

    this.paisService.searchRegion(region).subscribe((paises) => {
      this.paises = paises;
    });
  };
}
