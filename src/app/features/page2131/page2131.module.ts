import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2131Component } from './page2131.component';

@NgModule({
  declarations: [Page2131Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2131Component }])],
  exports: [Page2131Component]
})
export class Page2131Module {}
