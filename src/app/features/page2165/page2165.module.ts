import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2165Component } from './page2165.component';

@NgModule({
  declarations: [Page2165Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2165Component }])],
  exports: [Page2165Component]
})
export class Page2165Module {}
