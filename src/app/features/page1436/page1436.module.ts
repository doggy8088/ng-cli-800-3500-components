import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1436Component } from './page1436.component';

@NgModule({
  declarations: [Page1436Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1436Component }])],
  exports: [Page1436Component]
})
export class Page1436Module {}
