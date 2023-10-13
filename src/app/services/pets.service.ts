import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) {}
  createPet(pet:any): Observable<any> {
    return this.http.post("http://localhost:3001/mascota",pet)
  }
  getPets(): Observable<any> {
    return this.http.get("http://localhost:3001/mascota")
  }
}
