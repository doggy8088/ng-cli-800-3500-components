import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2221Component } from './page2221.component';

@NgModule({
  declarations: [Page2221Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2221Component }])],
  exports: [Page2221Component]
})
export class Page2221Module {}
