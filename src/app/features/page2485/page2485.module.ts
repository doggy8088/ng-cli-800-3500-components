import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2485Component } from './page2485.component';

@NgModule({
  declarations: [Page2485Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2485Component }])],
  exports: [Page2485Component]
})
export class Page2485Module {}
