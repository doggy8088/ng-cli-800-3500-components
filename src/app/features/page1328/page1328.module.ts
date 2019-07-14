import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1328Component } from './page1328.component';

@NgModule({
  declarations: [Page1328Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1328Component }])],
  exports: [Page1328Component]
})
export class Page1328Module {}
