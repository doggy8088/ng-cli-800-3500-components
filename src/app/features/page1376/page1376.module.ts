import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1376Component } from './page1376.component';

@NgModule({
  declarations: [Page1376Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1376Component }])],
  exports: [Page1376Component]
})
export class Page1376Module {}
