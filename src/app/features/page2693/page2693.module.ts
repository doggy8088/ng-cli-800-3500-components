import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2693Component } from './page2693.component';

@NgModule({
  declarations: [Page2693Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2693Component }])],
  exports: [Page2693Component]
})
export class Page2693Module {}
