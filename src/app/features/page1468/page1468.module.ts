import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1468Component } from './page1468.component';

@NgModule({
  declarations: [Page1468Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1468Component }])],
  exports: [Page1468Component]
})
export class Page1468Module {}
