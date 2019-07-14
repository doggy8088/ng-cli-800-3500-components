import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2309Component } from './page2309.component';

@NgModule({
  declarations: [Page2309Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2309Component }])],
  exports: [Page2309Component]
})
export class Page2309Module {}
