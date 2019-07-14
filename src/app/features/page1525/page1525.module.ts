import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1525Component } from './page1525.component';

@NgModule({
  declarations: [Page1525Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1525Component }])],
  exports: [Page1525Component]
})
export class Page1525Module {}
