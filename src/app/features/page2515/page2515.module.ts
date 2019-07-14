import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2515Component } from './page2515.component';

@NgModule({
  declarations: [Page2515Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2515Component }])],
  exports: [Page2515Component]
})
export class Page2515Module {}
