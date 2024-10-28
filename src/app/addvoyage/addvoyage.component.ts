import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-addvoyage',
  templateUrl: './addvoyage.component.html',
  styleUrls: ['./addvoyage.component.css'],
})
export class AddvoyageComponent {
  constructor(private voyageService: VoyageService) {}
  voyage: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
    depart: new FormControl('', [Validators.pattern(/^Vdepart.*/)]),
    arrive: new FormControl(),
    nb_place: new FormControl(),
  });

  add() {
    this.voyage.value.nb_view = 0;
    this.voyageService.addVoyage(this.voyage.value).subscribe();
  }
}
