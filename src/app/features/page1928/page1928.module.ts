import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1928Component } from './page1928.component';

@NgModule({
  declarations: [Page1928Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1928Component }])],
  exports: [Page1928Component]
})
export class Page1928Module {}
