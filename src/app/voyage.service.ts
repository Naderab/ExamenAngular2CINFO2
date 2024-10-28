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
}
