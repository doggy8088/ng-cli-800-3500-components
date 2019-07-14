import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2011Component } from './page2011.component';

@NgModule({
  declarations: [Page2011Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2011Component }])],
  exports: [Page2011Component]
})
export class Page2011Module {}
