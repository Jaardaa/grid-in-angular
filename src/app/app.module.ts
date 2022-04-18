import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { Unidad1Component } from './unidad1/unidad1.component';
import { Unidad2Component } from './unidad2/unidad2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { VsechnyLekceComponent } from './vsechny-lekce/vsechny-lekce.component';
@NgModule({
  declarations: [
    AppComponent,
    Unidad1Component,
    Unidad2Component,
    PageNotFoundComponent,
    SandboxComponent,
    VsechnyLekceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
