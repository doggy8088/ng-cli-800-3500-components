import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3411Component } from './page3411.component';

@NgModule({
  declarations: [Page3411Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3411Component }])],
  exports: [Page3411Component]
})
export class Page3411Module {}
