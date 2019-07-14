import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2839Component } from './page2839.component';

@NgModule({
  declarations: [Page2839Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2839Component }])],
  exports: [Page2839Component]
})
export class Page2839Module {}
