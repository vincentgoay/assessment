import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from '../services/form.service';
import { RSVP } from '../models/rsvp';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  private submitedForm: RSVP;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formSvc: FormService
  ) { }

  ngOnInit() {
    // Retrieve rsvp form from a list of saved rsvp form in the collection
    const index = this.activatedRoute.snapshot.params.idx;
    this.submitedForm = this.formSvc.rsvpCollection[index];
  }

  dismiss() {
    this.router.navigate(['/']);
  }
}
