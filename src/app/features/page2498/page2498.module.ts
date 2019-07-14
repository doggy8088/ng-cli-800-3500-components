import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2498Component } from './page2498.component';

@NgModule({
  declarations: [Page2498Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2498Component }])],
  exports: [Page2498Component]
})
export class Page2498Module {}
