import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1572Component } from './page1572.component';

@NgModule({
  declarations: [Page1572Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1572Component }])],
  exports: [Page1572Component]
})
export class Page1572Module {}
