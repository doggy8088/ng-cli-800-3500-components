import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2769Component } from './page2769.component';

@NgModule({
  declarations: [Page2769Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2769Component }])],
  exports: [Page2769Component]
})
export class Page2769Module {}
