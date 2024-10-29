import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from '../voyage.service';
import { Voyage } from '../voyage';

@Component({
  selector: 'app-details-voyage',
  templateUrl: './details-voyage.component.html',
  styleUrls: ['./details-voyage.component.css']
})
export class DetailsVoyageComponent {

  voyage!: Voyage;
  constructor(private ar: ActivatedRoute,private voyageService:VoyageService) {
    this.voyageService.getVoyageById(this.ar.snapshot.params['id']).subscribe({
      next: (data) => {
        this.voyage = data
        this.voyage.nb_view++;
        this.voyageService.updateVoyage(this.voyage.id, this.voyage).subscribe();
      }
    })
  }
}
