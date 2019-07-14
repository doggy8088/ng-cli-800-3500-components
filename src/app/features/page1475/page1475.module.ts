import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1475Component } from './page1475.component';

@NgModule({
  declarations: [Page1475Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1475Component }])],
  exports: [Page1475Component]
})
export class Page1475Module {}
