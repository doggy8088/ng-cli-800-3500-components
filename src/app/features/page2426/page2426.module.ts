import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2426Component } from './page2426.component';

@NgModule({
  declarations: [Page2426Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2426Component }])],
  exports: [Page2426Component]
})
export class Page2426Module {}
