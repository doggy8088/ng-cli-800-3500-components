import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2751Component } from './page2751.component';

@NgModule({
  declarations: [Page2751Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2751Component }])],
  exports: [Page2751Component]
})
export class Page2751Module {}
