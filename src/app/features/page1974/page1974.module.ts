import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1974Component } from './page1974.component';

@NgModule({
  declarations: [Page1974Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1974Component }])],
  exports: [Page1974Component]
})
export class Page1974Module {}
