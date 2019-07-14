import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1016Component } from './page1016.component';

@NgModule({
  declarations: [Page1016Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1016Component }])],
  exports: [Page1016Component]
})
export class Page1016Module {}
