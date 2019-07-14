import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2549Component } from './page2549.component';

@NgModule({
  declarations: [Page2549Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2549Component }])],
  exports: [Page2549Component]
})
export class Page2549Module {}
