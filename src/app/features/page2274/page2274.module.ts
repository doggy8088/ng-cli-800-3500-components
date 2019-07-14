import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2274Component } from './page2274.component';

@NgModule({
  declarations: [Page2274Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2274Component }])],
  exports: [Page2274Component]
})
export class Page2274Module {}
