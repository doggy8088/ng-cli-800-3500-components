import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1906Component } from './page1906.component';

@NgModule({
  declarations: [Page1906Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1906Component }])],
  exports: [Page1906Component]
})
export class Page1906Module {}
