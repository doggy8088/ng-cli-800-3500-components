import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1488Component } from './page1488.component';

@NgModule({
  declarations: [Page1488Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1488Component }])],
  exports: [Page1488Component]
})
export class Page1488Module {}
