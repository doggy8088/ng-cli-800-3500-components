import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2425Component } from './page2425.component';

@NgModule({
  declarations: [Page2425Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2425Component }])],
  exports: [Page2425Component]
})
export class Page2425Module {}
