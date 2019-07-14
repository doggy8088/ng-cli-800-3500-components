import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1200Component } from './page1200.component';

@NgModule({
  declarations: [Page1200Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1200Component }])],
  exports: [Page1200Component]
})
export class Page1200Module {}
