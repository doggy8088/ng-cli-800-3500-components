import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3300Component } from './page3300.component';

@NgModule({
  declarations: [Page3300Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3300Component }])],
  exports: [Page3300Component]
})
export class Page3300Module {}
