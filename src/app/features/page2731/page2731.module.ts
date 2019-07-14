import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2731Component } from './page2731.component';

@NgModule({
  declarations: [Page2731Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2731Component }])],
  exports: [Page2731Component]
})
export class Page2731Module {}
