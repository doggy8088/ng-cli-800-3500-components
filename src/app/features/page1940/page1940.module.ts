import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1940Component } from './page1940.component';

@NgModule({
  declarations: [Page1940Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1940Component }])],
  exports: [Page1940Component]
})
export class Page1940Module {}
