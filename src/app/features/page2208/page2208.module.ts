import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2208Component } from './page2208.component';

@NgModule({
  declarations: [Page2208Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2208Component }])],
  exports: [Page2208Component]
})
export class Page2208Module {}
