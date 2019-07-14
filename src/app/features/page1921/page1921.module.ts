import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1921Component } from './page1921.component';

@NgModule({
  declarations: [Page1921Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1921Component }])],
  exports: [Page1921Component]
})
export class Page1921Module {}
