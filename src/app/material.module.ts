import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

const MODULE = [
    MatToolbarModule, MatIconModule, MatButtonModule
];

@NgModule({
    imports: MODULE,
    exports: MODULE
})
export class MaterialModule{}