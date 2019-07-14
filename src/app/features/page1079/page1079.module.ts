import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1079Component } from './page1079.component';

@NgModule({
  declarations: [Page1079Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1079Component }])],
  exports: [Page1079Component]
})
export class Page1079Module {}
