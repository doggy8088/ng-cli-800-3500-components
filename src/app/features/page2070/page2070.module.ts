import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2070Component } from './page2070.component';

@NgModule({
  declarations: [Page2070Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2070Component }])],
  exports: [Page2070Component]
})
export class Page2070Module {}
