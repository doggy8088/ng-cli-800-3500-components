import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2176Component } from './page2176.component';

@NgModule({
  declarations: [Page2176Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2176Component }])],
  exports: [Page2176Component]
})
export class Page2176Module {}
