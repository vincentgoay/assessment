import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';
import { RSVP } from '../models/rsvp';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  rsvpCollection: RSVP[];
  
  //--------------------------------
  // MARK: Initialization
  //--------------------------------
  constructor(private httpClient: HttpClient) { }

  //--------------------------------
  // MARK: Retrieve a list of supported countries from API
  //--------------------------------
  getCountryList(): Promise<Country[]> {
    return this.httpClient.get<Country[]>(environment.api_key)
      .toPromise()
  }

  //--------------------------------
  // MARK: Save new form into collection and return index
  //--------------------------------
  saveForm(rsvp: RSVP): number {
    return this.rsvpCollection.push(rsvp);
  }
}
