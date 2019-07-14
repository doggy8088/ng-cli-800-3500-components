import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1360Component } from './page1360.component';

@NgModule({
  declarations: [Page1360Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1360Component }])],
  exports: [Page1360Component]
})
export class Page1360Module {}
