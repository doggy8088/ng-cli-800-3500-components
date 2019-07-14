import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1293Component } from './page1293.component';

@NgModule({
  declarations: [Page1293Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1293Component }])],
  exports: [Page1293Component]
})
export class Page1293Module {}
