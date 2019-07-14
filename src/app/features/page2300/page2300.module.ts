import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2300Component } from './page2300.component';

@NgModule({
  declarations: [Page2300Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2300Component }])],
  exports: [Page2300Component]
})
export class Page2300Module {}
