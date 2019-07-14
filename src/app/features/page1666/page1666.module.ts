import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1666Component } from './page1666.component';

@NgModule({
  declarations: [Page1666Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1666Component }])],
  exports: [Page1666Component]
})
export class Page1666Module {}
