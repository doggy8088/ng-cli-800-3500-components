import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1048Component } from './page1048.component';

@NgModule({
  declarations: [Page1048Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1048Component }])],
  exports: [Page1048Component]
})
export class Page1048Module {}
