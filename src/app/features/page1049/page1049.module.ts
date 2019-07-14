import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1049Component } from './page1049.component';

@NgModule({
  declarations: [Page1049Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1049Component }])],
  exports: [Page1049Component]
})
export class Page1049Module {}
