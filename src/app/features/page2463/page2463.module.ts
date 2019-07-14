import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2463Component } from './page2463.component';

@NgModule({
  declarations: [Page2463Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2463Component }])],
  exports: [Page2463Component]
})
export class Page2463Module {}
