import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3304Component } from './page3304.component';

@NgModule({
  declarations: [Page3304Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3304Component }])],
  exports: [Page3304Component]
})
export class Page3304Module {}
