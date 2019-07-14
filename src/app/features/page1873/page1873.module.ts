import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1873Component } from './page1873.component';

@NgModule({
  declarations: [Page1873Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1873Component }])],
  exports: [Page1873Component]
})
export class Page1873Module {}
