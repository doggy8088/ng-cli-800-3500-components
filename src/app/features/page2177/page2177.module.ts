import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2177Component } from './page2177.component';

@NgModule({
  declarations: [Page2177Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2177Component }])],
  exports: [Page2177Component]
})
export class Page2177Module {}
