import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3186Component } from './page3186.component';

@NgModule({
  declarations: [Page3186Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3186Component }])],
  exports: [Page3186Component]
})
export class Page3186Module {}
