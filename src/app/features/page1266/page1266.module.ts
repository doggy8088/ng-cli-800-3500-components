import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1266Component } from './page1266.component';

@NgModule({
  declarations: [Page1266Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1266Component }])],
  exports: [Page1266Component]
})
export class Page1266Module {}
