import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1308Component } from './page1308.component';

@NgModule({
  declarations: [Page1308Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1308Component }])],
  exports: [Page1308Component]
})
export class Page1308Module {}
