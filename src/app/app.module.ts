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
import { Sandbox2Component } from './sandbox2/sandbox2.component';
import { Sandbox3Component } from './sandbox3/sandbox3.component';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    Unidad1Component,
    Unidad2Component,
    PageNotFoundComponent,
    SandboxComponent,
    VsechnyLekceComponent,
    Sandbox2Component,
    Sandbox3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
