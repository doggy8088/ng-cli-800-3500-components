import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1851Component } from './page1851.component';

@NgModule({
  declarations: [Page1851Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1851Component }])],
  exports: [Page1851Component]
})
export class Page1851Module {}
