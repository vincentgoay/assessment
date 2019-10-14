import { Component, OnInit } from '@angular/core';
import { FormService } from './services/form.service';
import { Country } from './models/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assessment';

  countriesCollection: Country[] = [];

  constructor(private formSvc: FormService) {
  }

  ngOnInit() {
    this.formSvc.getCountryList()
      .then(result => {
        this.countriesCollection = result;
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }
}
