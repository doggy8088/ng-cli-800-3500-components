import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1625Component } from './page1625.component';

@NgModule({
  declarations: [Page1625Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1625Component }])],
  exports: [Page1625Component]
})
export class Page1625Module {}
