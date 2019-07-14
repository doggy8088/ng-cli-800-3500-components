import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1022Component } from './page1022.component';

@NgModule({
  declarations: [Page1022Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1022Component }])],
  exports: [Page1022Component]
})
export class Page1022Module {}
