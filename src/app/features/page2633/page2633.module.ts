import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2633Component } from './page2633.component';

@NgModule({
  declarations: [Page2633Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2633Component }])],
  exports: [Page2633Component]
})
export class Page2633Module {}
