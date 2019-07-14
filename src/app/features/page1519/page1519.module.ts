import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1519Component } from './page1519.component';

@NgModule({
  declarations: [Page1519Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1519Component }])],
  exports: [Page1519Component]
})
export class Page1519Module {}
