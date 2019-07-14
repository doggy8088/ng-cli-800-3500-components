import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2219Component } from './page2219.component';

@NgModule({
  declarations: [Page2219Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2219Component }])],
  exports: [Page2219Component]
})
export class Page2219Module {}
