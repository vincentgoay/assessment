import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Country } from '../models/country';
import { FormService } from '../services/form.service';
import { Router } from '@angular/router';
import { RSVP } from '../models/rsvp';
import * as moment from 'moment';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  //--------------------------------
  // MARK: Properties
  //--------------------------------
  today: Date;

  countryCollection: Country[];

  formGroup: FormGroup;

  get email() { return this.formGroup.get('email'); }
  get password() { return this.formGroup.get('password'); }
  get name() { return this.formGroup.get('name'); }
  get dob() { return this.formGroup.get('dob'); }
  get address() { return this.formGroup.get('address'); }
  get contact() { return this.formGroup.get('contact'); }

  //--------------------------------
  // MARK: Initialization
  //--------------------------------
  constructor(
    private formBuilder: FormBuilder,
    private formSvc: FormService,
    private router: Router) {

    this.today = new Date();
  }

  ngOnInit() {
    this.formGroup = this.initFormGroup();
    this.fetchCountryCollectionFromApi();
  }

  //--------------------------------
  // MARK: Public Methods
  //--------------------------------
  public hasError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  public formSubmitted() {
    console.log('Form submitted...');
    console.log(this.formGroup.value);
    const fg = this.formGroup;
    const id = this.formSvc.rsvpCollection.length + 1;

    const newRsvp = new RSVP(
      id,
      new Date(),
      fg.value.email,
      fg.value.password,
      fg.value.name,
      fg.value.gender,
      fg.value.dob.toDate(),
      fg.value.address,
      fg.value.country,
      fg.value.contact);

    const index = this.formSvc.saveForm(newRsvp) - 1;

    this.formGroup.reset();
    this.router.navigate(['/confirm', index]);
  }

  public isUnderAge(): boolean {
    if (this.dob.value) {
      const now = new Date();
      const birthDate = this.formGroup.value.dob.toDate();
      const age = moment().diff(birthDate, "years", false);
      return !(age >= 18);
    }
    return true;  // Under age by default
  }

  //--------------------------------
  // MARK: Private Methods
  //--------------------------------
  private fetchCountryCollectionFromApi() {
    this.formSvc.getCountryList()
      .then(result => {
        this.countryCollection = result;
      })
      .catch(error => {
        console.log('Fetch countries from API error...')
        console.log('Error: ', error);
        this.countryCollection = [];
      })
  }

  private initFormGroup(): FormGroup {
    return this.formGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.email, Validators.required]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#\$])(?=.{8,})'))]),
      name: this.formBuilder.control('', [Validators.required]),
      gender: this.formBuilder.control('male', [Validators.required]),
      dob: this.formBuilder.control('', [Validators.required]),
      address: this.formBuilder.control('', [Validators.required]),
      country: this.formBuilder.control('', [Validators.required]),
      contact: this.formBuilder.control('', [Validators.required, Validators.pattern(new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s0-9]*$'))])  //^([0-9])([\+]?)([-]?)([\s]?)([\(]?)([\)]?)'
    });
  }
}
