import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2686Component } from './page2686.component';

@NgModule({
  declarations: [Page2686Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2686Component }])],
  exports: [Page2686Component]
})
export class Page2686Module {}
