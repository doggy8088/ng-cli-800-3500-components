import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2560Component } from './page2560.component';

@NgModule({
  declarations: [Page2560Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2560Component }])],
  exports: [Page2560Component]
})
export class Page2560Module {}
