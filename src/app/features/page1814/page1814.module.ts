import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1814Component } from './page1814.component';

@NgModule({
  declarations: [Page1814Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1814Component }])],
  exports: [Page1814Component]
})
export class Page1814Module {}
