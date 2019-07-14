import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1633Component } from './page1633.component';

@NgModule({
  declarations: [Page1633Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1633Component }])],
  exports: [Page1633Component]
})
export class Page1633Module {}
