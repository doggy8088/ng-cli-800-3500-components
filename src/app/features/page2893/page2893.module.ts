import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2893Component } from './page2893.component';

@NgModule({
  declarations: [Page2893Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2893Component }])],
  exports: [Page2893Component]
})
export class Page2893Module {}
