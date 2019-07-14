import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1105Component } from './page1105.component';

@NgModule({
  declarations: [Page1105Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1105Component }])],
  exports: [Page1105Component]
})
export class Page1105Module {}
