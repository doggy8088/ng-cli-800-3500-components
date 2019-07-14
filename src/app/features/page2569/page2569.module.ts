import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2569Component } from './page2569.component';

@NgModule({
  declarations: [Page2569Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2569Component }])],
  exports: [Page2569Component]
})
export class Page2569Module {}
