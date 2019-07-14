import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1770Component } from './page1770.component';

@NgModule({
  declarations: [Page1770Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1770Component }])],
  exports: [Page1770Component]
})
export class Page1770Module {}
