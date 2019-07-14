import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1074Component } from './page1074.component';

@NgModule({
  declarations: [Page1074Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1074Component }])],
  exports: [Page1074Component]
})
export class Page1074Module {}
