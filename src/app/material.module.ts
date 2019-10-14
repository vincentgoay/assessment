import { NgModule } from '@angular/core';
import { MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDividerModule,
    MatSelectModule } from '@angular/material';

const MODULE = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDividerModule,
    MatSelectModule
];

@NgModule({
    imports: MODULE,
    exports: MODULE
})
export class MaterialModule{}