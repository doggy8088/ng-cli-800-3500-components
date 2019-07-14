import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2853Component } from './page2853.component';

@NgModule({
  declarations: [Page2853Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2853Component }])],
  exports: [Page2853Component]
})
export class Page2853Module {}
