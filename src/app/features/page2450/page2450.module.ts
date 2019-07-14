import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2450Component } from './page2450.component';

@NgModule({
  declarations: [Page2450Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2450Component }])],
  exports: [Page2450Component]
})
export class Page2450Module {}
