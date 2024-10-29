import { Component } from '@angular/core';
import { Voyage } from '../voyage';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-listvoyage',
  templateUrl: './listvoyage.component.html',
  styleUrls: ['./listvoyage.component.css']
})
export class ListvoyageComponent {

  voyages: Voyage[] = [];
  constructor(private voyageService: VoyageService) {
    this.voyageService.getVoyages().subscribe({
      next: (data) => this.voyages = data,
      error : (e) => console.log(e)
    })
  }

  reserver(v: Voyage) {
    v.nb_place--;
    this.voyageService.updateVoyage(v.id, v).subscribe({
      next: () => {
        let index = this.voyages.findIndex(e=>e.id == v.id)
        this.voyages[index]=v
      }
    })
  }

}
