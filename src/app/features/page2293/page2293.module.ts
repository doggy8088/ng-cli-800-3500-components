import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2293Component } from './page2293.component';

@NgModule({
  declarations: [Page2293Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2293Component }])],
  exports: [Page2293Component]
})
export class Page2293Module {}
