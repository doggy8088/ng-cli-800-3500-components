import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1981Component } from './page1981.component';

@NgModule({
  declarations: [Page1981Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1981Component }])],
  exports: [Page1981Component]
})
export class Page1981Module {}
