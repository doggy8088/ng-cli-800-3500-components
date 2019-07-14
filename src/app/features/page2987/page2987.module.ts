import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2987Component } from './page2987.component';

@NgModule({
  declarations: [Page2987Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2987Component }])],
  exports: [Page2987Component]
})
export class Page2987Module {}
