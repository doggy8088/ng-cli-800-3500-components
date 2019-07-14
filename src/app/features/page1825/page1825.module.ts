import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1825Component } from './page1825.component';

@NgModule({
  declarations: [Page1825Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1825Component }])],
  exports: [Page1825Component]
})
export class Page1825Module {}
