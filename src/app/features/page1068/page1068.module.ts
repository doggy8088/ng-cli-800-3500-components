import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1068Component } from './page1068.component';

@NgModule({
  declarations: [Page1068Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1068Component }])],
  exports: [Page1068Component]
})
export class Page1068Module {}
