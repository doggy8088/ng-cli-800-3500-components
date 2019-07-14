import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3355Component } from './page3355.component';

@NgModule({
  declarations: [Page3355Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3355Component }])],
  exports: [Page3355Component]
})
export class Page3355Module {}
