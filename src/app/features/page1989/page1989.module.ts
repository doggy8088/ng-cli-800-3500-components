import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1989Component } from './page1989.component';

@NgModule({
  declarations: [Page1989Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1989Component }])],
  exports: [Page1989Component]
})
export class Page1989Module {}
