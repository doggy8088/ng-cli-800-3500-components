import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1285Component } from './page1285.component';

@NgModule({
  declarations: [Page1285Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1285Component }])],
  exports: [Page1285Component]
})
export class Page1285Module {}
