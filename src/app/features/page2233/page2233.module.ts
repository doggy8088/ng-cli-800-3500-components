import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2233Component } from './page2233.component';

@NgModule({
  declarations: [Page2233Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2233Component }])],
  exports: [Page2233Component]
})
export class Page2233Module {}
