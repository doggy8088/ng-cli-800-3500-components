import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1827Component } from './page1827.component';

@NgModule({
  declarations: [Page1827Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1827Component }])],
  exports: [Page1827Component]
})
export class Page1827Module {}
