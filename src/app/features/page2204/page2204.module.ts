import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2204Component } from './page2204.component';

@NgModule({
  declarations: [Page2204Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2204Component }])],
  exports: [Page2204Component]
})
export class Page2204Module {}
