import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2304Component } from './page2304.component';

@NgModule({
  declarations: [Page2304Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2304Component }])],
  exports: [Page2304Component]
})
export class Page2304Module {}
