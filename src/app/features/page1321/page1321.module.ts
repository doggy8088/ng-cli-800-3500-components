import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1321Component } from './page1321.component';

@NgModule({
  declarations: [Page1321Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1321Component }])],
  exports: [Page1321Component]
})
export class Page1321Module {}
