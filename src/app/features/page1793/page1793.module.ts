import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1793Component } from './page1793.component';

@NgModule({
  declarations: [Page1793Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1793Component }])],
  exports: [Page1793Component]
})
export class Page1793Module {}
