import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1798Component } from './page1798.component';

@NgModule({
  declarations: [Page1798Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1798Component }])],
  exports: [Page1798Component]
})
export class Page1798Module {}
