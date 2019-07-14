import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1295Component } from './page1295.component';

@NgModule({
  declarations: [Page1295Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1295Component }])],
  exports: [Page1295Component]
})
export class Page1295Module {}
