import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1883Component } from './page1883.component';

@NgModule({
  declarations: [Page1883Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1883Component }])],
  exports: [Page1883Component]
})
export class Page1883Module {}
