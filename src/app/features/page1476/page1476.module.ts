import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1476Component } from './page1476.component';

@NgModule({
  declarations: [Page1476Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1476Component }])],
  exports: [Page1476Component]
})
export class Page1476Module {}
