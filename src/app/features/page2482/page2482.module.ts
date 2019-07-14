import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2482Component } from './page2482.component';

@NgModule({
  declarations: [Page2482Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2482Component }])],
  exports: [Page2482Component]
})
export class Page2482Module {}
