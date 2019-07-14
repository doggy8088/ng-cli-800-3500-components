import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1223Component } from './page1223.component';

@NgModule({
  declarations: [Page1223Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1223Component }])],
  exports: [Page1223Component]
})
export class Page1223Module {}
