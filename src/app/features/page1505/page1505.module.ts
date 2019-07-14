import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1505Component } from './page1505.component';

@NgModule({
  declarations: [Page1505Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1505Component }])],
  exports: [Page1505Component]
})
export class Page1505Module {}
