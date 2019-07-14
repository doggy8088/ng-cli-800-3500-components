import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2299Component } from './page2299.component';

@NgModule({
  declarations: [Page2299Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2299Component }])],
  exports: [Page2299Component]
})
export class Page2299Module {}
