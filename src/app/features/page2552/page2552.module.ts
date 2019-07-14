import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2552Component } from './page2552.component';

@NgModule({
  declarations: [Page2552Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2552Component }])],
  exports: [Page2552Component]
})
export class Page2552Module {}
