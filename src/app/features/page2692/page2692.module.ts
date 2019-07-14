import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2692Component } from './page2692.component';

@NgModule({
  declarations: [Page2692Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2692Component }])],
  exports: [Page2692Component]
})
export class Page2692Module {}
