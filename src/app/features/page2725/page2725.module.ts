import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2725Component } from './page2725.component';

@NgModule({
  declarations: [Page2725Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2725Component }])],
  exports: [Page2725Component]
})
export class Page2725Module {}
