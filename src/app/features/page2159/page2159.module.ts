import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2159Component } from './page2159.component';

@NgModule({
  declarations: [Page2159Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2159Component }])],
  exports: [Page2159Component]
})
export class Page2159Module {}
