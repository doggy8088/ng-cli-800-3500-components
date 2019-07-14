import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3432Component } from './page3432.component';

@NgModule({
  declarations: [Page3432Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3432Component }])],
  exports: [Page3432Component]
})
export class Page3432Module {}
