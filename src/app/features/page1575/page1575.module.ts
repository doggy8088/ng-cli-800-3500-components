import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1575Component } from './page1575.component';

@NgModule({
  declarations: [Page1575Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1575Component }])],
  exports: [Page1575Component]
})
export class Page1575Module {}
