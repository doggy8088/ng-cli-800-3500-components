import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1680Component } from './page1680.component';

@NgModule({
  declarations: [Page1680Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1680Component }])],
  exports: [Page1680Component]
})
export class Page1680Module {}
