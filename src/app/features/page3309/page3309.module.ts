import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3309Component } from './page3309.component';

@NgModule({
  declarations: [Page3309Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3309Component }])],
  exports: [Page3309Component]
})
export class Page3309Module {}
