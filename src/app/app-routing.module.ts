import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { Unidad1Component } from './unidad1/unidad1.component';
import { Unidad2Component } from './unidad2/unidad2.component';

const routes: Routes = [
/*   {
    path: "",
    PAK NĚCO VYBER, ASI VŠECHNY LEKCE
    redirectTo: "",
    pathMatch: "full"
  }, */
  {
    path: "unidad1",
    component: Unidad1Component
  },
  {
    path: "unidad2",
    component: Unidad2Component
  },
  {
    path: "sandbox",
    component: SandboxComponent
  }
/* SPUSTIT AŽ BUDE LANDING PAGE
/*   {
    path: "**",
    component: PageNotFoundComponent
  } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
