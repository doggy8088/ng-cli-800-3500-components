import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1138Component } from './page1138.component';

@NgModule({
  declarations: [Page1138Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1138Component }])],
  exports: [Page1138Component]
})
export class Page1138Module {}
