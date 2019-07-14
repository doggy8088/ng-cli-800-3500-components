import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2641Component } from './page2641.component';

@NgModule({
  declarations: [Page2641Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2641Component }])],
  exports: [Page2641Component]
})
export class Page2641Module {}
