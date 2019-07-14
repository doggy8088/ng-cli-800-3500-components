import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1245Component } from './page1245.component';

@NgModule({
  declarations: [Page1245Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1245Component }])],
  exports: [Page1245Component]
})
export class Page1245Module {}
