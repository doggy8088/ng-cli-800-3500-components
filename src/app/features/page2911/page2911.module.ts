import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2911Component } from './page2911.component';

@NgModule({
  declarations: [Page2911Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2911Component }])],
  exports: [Page2911Component]
})
export class Page2911Module {}
