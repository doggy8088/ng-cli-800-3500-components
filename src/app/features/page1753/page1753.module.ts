import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1753Component } from './page1753.component';

@NgModule({
  declarations: [Page1753Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1753Component }])],
  exports: [Page1753Component]
})
export class Page1753Module {}
