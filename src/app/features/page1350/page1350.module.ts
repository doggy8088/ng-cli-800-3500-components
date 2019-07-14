import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1350Component } from './page1350.component';

@NgModule({
  declarations: [Page1350Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1350Component }])],
  exports: [Page1350Component]
})
export class Page1350Module {}
