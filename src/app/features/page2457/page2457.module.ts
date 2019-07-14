import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2457Component } from './page2457.component';

@NgModule({
  declarations: [Page2457Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2457Component }])],
  exports: [Page2457Component]
})
export class Page2457Module {}
