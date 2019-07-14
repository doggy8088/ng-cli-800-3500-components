import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2742Component } from './page2742.component';

@NgModule({
  declarations: [Page2742Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2742Component }])],
  exports: [Page2742Component]
})
export class Page2742Module {}
