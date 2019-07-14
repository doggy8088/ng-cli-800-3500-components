import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0519Component } from './page0519.component';

@NgModule({
  declarations: [Page0519Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0519Component }])],
  exports: [Page0519Component]
})
export class Page0519Module {}
