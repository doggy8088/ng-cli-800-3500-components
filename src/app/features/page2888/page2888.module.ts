import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2888Component } from './page2888.component';

@NgModule({
  declarations: [Page2888Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2888Component }])],
  exports: [Page2888Component]
})
export class Page2888Module {}
