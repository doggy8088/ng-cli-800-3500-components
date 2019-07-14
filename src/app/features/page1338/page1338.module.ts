import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1338Component } from './page1338.component';

@NgModule({
  declarations: [Page1338Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1338Component }])],
  exports: [Page1338Component]
})
export class Page1338Module {}
