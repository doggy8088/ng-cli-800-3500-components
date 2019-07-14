import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1099Component } from './page1099.component';

@NgModule({
  declarations: [Page1099Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1099Component }])],
  exports: [Page1099Component]
})
export class Page1099Module {}
