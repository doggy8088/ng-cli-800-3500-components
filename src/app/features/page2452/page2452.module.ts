import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2452Component } from './page2452.component';

@NgModule({
  declarations: [Page2452Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2452Component }])],
  exports: [Page2452Component]
})
export class Page2452Module {}
