import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2772Component } from './page2772.component';

@NgModule({
  declarations: [Page2772Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2772Component }])],
  exports: [Page2772Component]
})
export class Page2772Module {}
