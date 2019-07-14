import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1478Component } from './page1478.component';

@NgModule({
  declarations: [Page1478Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1478Component }])],
  exports: [Page1478Component]
})
export class Page1478Module {}
