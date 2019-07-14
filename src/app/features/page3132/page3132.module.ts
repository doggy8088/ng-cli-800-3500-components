import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3132Component } from './page3132.component';

@NgModule({
  declarations: [Page3132Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3132Component }])],
  exports: [Page3132Component]
})
export class Page3132Module {}
