import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2718Component } from './page2718.component';

@NgModule({
  declarations: [Page2718Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2718Component }])],
  exports: [Page2718Component]
})
export class Page2718Module {}
