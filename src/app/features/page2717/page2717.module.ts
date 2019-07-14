import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2717Component } from './page2717.component';

@NgModule({
  declarations: [Page2717Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2717Component }])],
  exports: [Page2717Component]
})
export class Page2717Module {}
