import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient: HttpClient) { }

  getCountryList(): Promise<Country[]> {
    return this.httpClient.get<Country[]>(environment.api_key)
      .toPromise()
  }
}
