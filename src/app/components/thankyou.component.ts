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

  displayedColumns: string[] = ['item', 'description'];
  dataSource: TableDataStruct[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formSvc: FormService
  ) {

  }

  ngOnInit() {
    // Retrieve rsvp form from a list of saved rsvp form in the collection
    const index = this.activatedRoute.snapshot.params.idx;
    this.submitedForm = this.formSvc.rsvpCollection[index];

    console.log('Index: ', index);
    console.log('Submitted Form: ', this.submitedForm);

    this.dataSource = this.generateDatasource(this.submitedForm);
    console.log('Datasource: ', this.dataSource);
  }

  dismiss() {
    this.router.navigate(['/']);
  }

  private generateDatasource(data: RSVP): TableDataStruct[] {
    let newDatasource = [];
    for (let key in data) {
      const tableData: TableDataStruct = {
        item: key,
        description: data[key]
      }

      if (key == 'createdDate') {
        tableData.item = "Created Date"
      }

      tableData.item = tableData.item.toUpperCase();
      
      newDatasource.push(tableData);
    }
    return newDatasource;
  }

  private submitedForm: RSVP;
}

export interface TableDataStruct {
  item: string,
  description: string
}
