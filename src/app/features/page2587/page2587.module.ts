import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2587Component } from './page2587.component';

@NgModule({
  declarations: [Page2587Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2587Component }])],
  exports: [Page2587Component]
})
export class Page2587Module {}
