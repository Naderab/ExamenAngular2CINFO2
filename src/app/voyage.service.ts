import { Injectable } from '@angular/core';
import { Voyage } from './voyage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private http:HttpClient) { }

  addVoyage(voyage: Voyage) {
    return this.http.post('http://localhost:3000/voyage', voyage);
  }

  getVoyages() {
    return this.http.get<Voyage[]>('http://localhost:3000/voyage');
  }

  updateVoyage(id: number, voyage: Voyage) {
    return this.http.put('http://localhost:3000/voyage/'+id,voyage);
  }

  getVoyageById(id: number) {
    return this.http.get<Voyage>('http://localhost:3000/voyage/' + id);
  }
}
