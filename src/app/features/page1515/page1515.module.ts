import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1515Component } from './page1515.component';

@NgModule({
  declarations: [Page1515Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1515Component }])],
  exports: [Page1515Component]
})
export class Page1515Module {}
