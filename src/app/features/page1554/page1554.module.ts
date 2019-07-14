import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1554Component } from './page1554.component';

@NgModule({
  declarations: [Page1554Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1554Component }])],
  exports: [Page1554Component]
})
export class Page1554Module {}
