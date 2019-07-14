import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1489Component } from './page1489.component';

@NgModule({
  declarations: [Page1489Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1489Component }])],
  exports: [Page1489Component]
})
export class Page1489Module {}
