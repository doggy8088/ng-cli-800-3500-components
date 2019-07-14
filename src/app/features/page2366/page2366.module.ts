import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2366Component } from './page2366.component';

@NgModule({
  declarations: [Page2366Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2366Component }])],
  exports: [Page2366Component]
})
export class Page2366Module {}
