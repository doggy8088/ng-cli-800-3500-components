import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1160Component } from './page1160.component';

@NgModule({
  declarations: [Page1160Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1160Component }])],
  exports: [Page1160Component]
})
export class Page1160Module {}
