import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1133Component } from './page1133.component';

@NgModule({
  declarations: [Page1133Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1133Component }])],
  exports: [Page1133Component]
})
export class Page1133Module {}
