import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1656Component } from './page1656.component';

@NgModule({
  declarations: [Page1656Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1656Component }])],
  exports: [Page1656Component]
})
export class Page1656Module {}
