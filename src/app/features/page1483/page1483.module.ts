import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1483Component } from './page1483.component';

@NgModule({
  declarations: [Page1483Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1483Component }])],
  exports: [Page1483Component]
})
export class Page1483Module {}
