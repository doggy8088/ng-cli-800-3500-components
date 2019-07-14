import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1326Component } from './page1326.component';

@NgModule({
  declarations: [Page1326Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1326Component }])],
  exports: [Page1326Component]
})
export class Page1326Module {}
