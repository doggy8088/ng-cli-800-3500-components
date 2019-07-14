import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2115Component } from './page2115.component';

@NgModule({
  declarations: [Page2115Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2115Component }])],
  exports: [Page2115Component]
})
export class Page2115Module {}
