import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1166Component } from './page1166.component';

@NgModule({
  declarations: [Page1166Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1166Component }])],
  exports: [Page1166Component]
})
export class Page1166Module {}
