import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2505Component } from './page2505.component';

@NgModule({
  declarations: [Page2505Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2505Component }])],
  exports: [Page2505Component]
})
export class Page2505Module {}
