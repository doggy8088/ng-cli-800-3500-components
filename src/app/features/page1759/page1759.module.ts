import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1759Component } from './page1759.component';

@NgModule({
  declarations: [Page1759Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1759Component }])],
  exports: [Page1759Component]
})
export class Page1759Module {}
