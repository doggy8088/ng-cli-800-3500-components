import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2715Component } from './page2715.component';

@NgModule({
  declarations: [Page2715Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2715Component }])],
  exports: [Page2715Component]
})
export class Page2715Module {}
