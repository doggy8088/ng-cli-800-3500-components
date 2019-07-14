import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2851Component } from './page2851.component';

@NgModule({
  declarations: [Page2851Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2851Component }])],
  exports: [Page2851Component]
})
export class Page2851Module {}
