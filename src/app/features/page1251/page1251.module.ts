import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1251Component } from './page1251.component';

@NgModule({
  declarations: [Page1251Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1251Component }])],
  exports: [Page1251Component]
})
export class Page1251Module {}
