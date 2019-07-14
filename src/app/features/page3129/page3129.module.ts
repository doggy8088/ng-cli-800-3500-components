import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3129Component } from './page3129.component';

@NgModule({
  declarations: [Page3129Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3129Component }])],
  exports: [Page3129Component]
})
export class Page3129Module {}
