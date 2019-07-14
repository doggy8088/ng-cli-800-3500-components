import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2639Component } from './page2639.component';

@NgModule({
  declarations: [Page2639Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2639Component }])],
  exports: [Page2639Component]
})
export class Page2639Module {}
