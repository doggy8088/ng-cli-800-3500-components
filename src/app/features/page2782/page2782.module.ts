import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2782Component } from './page2782.component';

@NgModule({
  declarations: [Page2782Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2782Component }])],
  exports: [Page2782Component]
})
export class Page2782Module {}
