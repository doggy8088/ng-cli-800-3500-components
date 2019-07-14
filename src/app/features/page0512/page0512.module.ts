import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0512Component } from './page0512.component';

@NgModule({
  declarations: [Page0512Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0512Component }])],
  exports: [Page0512Component]
})
export class Page0512Module {}
