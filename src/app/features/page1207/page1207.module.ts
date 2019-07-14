import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1207Component } from './page1207.component';

@NgModule({
  declarations: [Page1207Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1207Component }])],
  exports: [Page1207Component]
})
export class Page1207Module {}
