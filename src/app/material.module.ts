import { NgModule } from '@angular/core';
import { MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDividerModule,
    MatSelectModule, 
    MatTableModule} from '@angular/material';

const MODULE = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule
];

@NgModule({
    imports: MODULE,
    exports: MODULE
})
export class MaterialModule{}