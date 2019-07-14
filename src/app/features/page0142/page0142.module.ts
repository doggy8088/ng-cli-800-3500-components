import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0142Component } from './page0142.component';

@NgModule({
  declarations: [Page0142Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0142Component }])],
  exports: [Page0142Component]
})
export class Page0142Module {}
