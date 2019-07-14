import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1645Component } from './page1645.component';

@NgModule({
  declarations: [Page1645Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1645Component }])],
  exports: [Page1645Component]
})
export class Page1645Module {}
