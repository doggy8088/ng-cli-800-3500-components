import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2545Component } from './page2545.component';

@NgModule({
  declarations: [Page2545Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2545Component }])],
  exports: [Page2545Component]
})
export class Page2545Module {}
