import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1791Component } from './page1791.component';

@NgModule({
  declarations: [Page1791Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1791Component }])],
  exports: [Page1791Component]
})
export class Page1791Module {}
