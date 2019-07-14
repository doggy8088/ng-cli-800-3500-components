import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2983Component } from './page2983.component';

@NgModule({
  declarations: [Page2983Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2983Component }])],
  exports: [Page2983Component]
})
export class Page2983Module {}
