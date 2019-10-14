import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './services/form.service';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegformComponent } from './components/regform.component';
import { ThankyouComponent } from './components/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    RegformComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule, FlexLayoutModule,
    MatMomentDateModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
