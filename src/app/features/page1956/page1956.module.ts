import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1956Component } from './page1956.component';

@NgModule({
  declarations: [Page1956Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1956Component }])],
  exports: [Page1956Component]
})
export class Page1956Module {}
