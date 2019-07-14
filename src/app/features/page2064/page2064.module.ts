import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2064Component } from './page2064.component';

@NgModule({
  declarations: [Page2064Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2064Component }])],
  exports: [Page2064Component]
})
export class Page2064Module {}
