import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1406Component } from './page1406.component';

@NgModule({
  declarations: [Page1406Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1406Component }])],
  exports: [Page1406Component]
})
export class Page1406Module {}
