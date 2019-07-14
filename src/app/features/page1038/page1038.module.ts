import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1038Component } from './page1038.component';

@NgModule({
  declarations: [Page1038Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1038Component }])],
  exports: [Page1038Component]
})
export class Page1038Module {}
