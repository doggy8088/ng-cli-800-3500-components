import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1466Component } from './page1466.component';

@NgModule({
  declarations: [Page1466Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1466Component }])],
  exports: [Page1466Component]
})
export class Page1466Module {}
